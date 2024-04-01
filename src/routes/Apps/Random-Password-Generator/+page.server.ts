import type { Actions, PageServerLoad } from './$types'

 


let length = 12


// Function to generate a random password
function generatePassword(length: number): string {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const special = '!@#$%^&*()_+-={}[]|?/><'
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[]|?/><';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

export const load: PageServerLoad = async () => {
    // Generate a random password
    const password = generatePassword(length);
    

    return {
        password: password
    };
};


export const actions: Actions = {
  generate: async ({ request }) => {
    const formData = await request.formData()
    const data = Object.fromEntries(formData)
    // do whatever you want
    length = Number(data.length)
    console.log(data.length)
  },
}
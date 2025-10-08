export function initEnvFields() {
   document
      .querySelectorAll('input[type="hidden"][name="access_key"]')
      .forEach(input => {
         input.value = process.env.WEB3FORMS_ACCESS_KEY || '';
      });
}

export default class Cookies {
  
  public set(key: string, value: string, days: number = 0): void {
    
    if (!days) {
      document.cookie = `${key}=${value};path=/`;
      return
    }

    const date = new Date();

    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    
    const expires = `expires=${date.toUTCString()}`;

    document.cookie = `${key}=${value};${expires};path=/`;
  }

  public get(key: string): string {

    const cookies = decodeURIComponent(document.cookie).split(';');
    const cookiesLength = cookies.length;

    for (let x = 0; x < cookiesLength; x++) {
      
      const cookie = cookies[x].trim().split('=');
      
      if (cookie[0] === key) {
        return cookie[1];
      }
    }

    return '';
  }

  public remove(key: string): void {
    document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
  }
}

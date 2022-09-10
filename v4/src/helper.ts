export const debounce = (callback: Function, waitingTime: number = 0): any => {

  if (typeof callback !== 'function') {
    throw Error('The first argument is not a type function.');
  }

  if (typeof waitingTime !== 'number') {
    throw Error('The second argument is not a type number');
  }

  let timeout: any = null;

  return (...args: any) => {

    let context: any = this;

    clearTimeout(timeout);

    timeout = setTimeout(() => {

      timeout = null;
      callback.apply(context, args);

    }, waitingTime);
  };
}

export const isElementInViewport = (element: HTMLElement): boolean => {

  const rect = element.getBoundingClientRect();

  return (
    Math.floor(rect.top) >= 0 &&
    Math.floor(rect.left) >= 0 &&
    Math.floor(rect.bottom) <= (window.innerHeight || document.documentElement.clientHeight) &&
    Math.floor(rect.right) <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

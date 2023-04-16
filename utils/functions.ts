export const subscribeObject = {
  next: (x: any) => console.log('next ' + x),
  error: (err: any) => console.log('error ' + err),
  complete: () => console.log('done')
};

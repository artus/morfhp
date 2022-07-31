export const onSubmitWrapper: (toExecute: () => void) => Promise<void> = async (
  toExecute: () => void,
) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      toExecute();
      setTimeout(resolve, 500);
    }, 0)
  });
}
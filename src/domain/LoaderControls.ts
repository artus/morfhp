export class LoaderControls {

  constructor(
    readonly isLoading: boolean,
    readonly start: () => void,
    readonly stop: () => void
  ) { }
}
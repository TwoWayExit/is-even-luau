interface Module {
	/**
	 * @returns A boolean indicating whether or not the passed number is even, returning `undefined` and printing a warning if unsucessful
	 */
	IsEven: (passedNumber: number) => boolean | undefined;
}

declare const Module: Module;

export = Module;

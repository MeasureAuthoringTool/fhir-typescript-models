/**
 * MeasurePackage stores the uploaded file for a given Measure.
 */
export class CqmMeasurePackage {
  public field?: Uint8Array;

  public static parse(
      json: any,
      providedInstance: CqmMeasurePackage = new CqmMeasurePackage()
  ): CqmMeasurePackage {
    // TODO
    const newInstance: CqmMeasurePackage = providedInstance;
    return newInstance;
  }

  toJSON(): any {
    // TODO
    const result: any = {};
  }
}


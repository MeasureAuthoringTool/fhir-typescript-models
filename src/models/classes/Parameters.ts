/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  IParameters,
  ParametersParameter,
  Resource,
} from "../internal";

export class Parameters extends Resource {
  static readonly baseType: string = "FHIR.Resource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Parameters";

  public parameter?: Array<ParametersParameter>;

  public static parse(
    json: IParameters,
    providedInstance: Parameters = new Parameters()
  ): Parameters {
    const newInstance: Parameters = Resource.parse(json, providedInstance);
  
    if (json.parameter) {
      newInstance.parameter = json.parameter.map((x) => ParametersParameter.parse(x));
    }
    return newInstance;
  }

  public static isParameters(input?: unknown): input is Parameters {
    const castInput = input as Parameters;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Parameters";
  }

  public toJSON(): IParameters {
    const result: IParameters = super.toJSON();

    if (this.parameter) {
      result.parameter = this.parameter.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Parameters";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

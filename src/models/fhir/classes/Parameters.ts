/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  FhirList,
  IParameters,
  ParametersParameter,
  Resource,
  FhirType
} from "../internal";

@FhirType("Parameters", "Resource")
export class Parameters extends Resource {
  static readonly baseType: string = "FHIR.Resource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Parameters";

  static readonly primaryCodePath: string | null = null;

  @FhirList("ParametersParameter")
  public parameter?: Array<ParametersParameter>;

  public static parse(
    json: IParameters,
    providedInstance: Parameters = new Parameters()
  ): Parameters {
    const newInstance: Parameters = Resource.parse(json, providedInstance);
  
    if (json.parameter !== undefined) {
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

  public clone(): Parameters {
    return Parameters.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Parameters";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("GraphCompartmentUse", "PrimitiveCode")
export class GraphCompartmentUse extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GraphCompartmentUse";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: GraphCompartmentUse = new GraphCompartmentUse()
  ): GraphCompartmentUse {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isGraphCompartmentUse(input?: unknown): input is GraphCompartmentUse {
    const castInput = input as GraphCompartmentUse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GraphCompartmentUse";
  }

  public clone(): GraphCompartmentUse {
    const result = new GraphCompartmentUse();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "GraphCompartmentUse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

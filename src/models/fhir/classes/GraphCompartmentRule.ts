/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  PrimitiveCode,
  FhirType
} from "../internal";

@FhirType("GraphCompartmentRule", "PrimitiveCode")
export class GraphCompartmentRule extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "GraphCompartmentRule";

  static readonly primaryCodePath: string | null = null;

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: GraphCompartmentRule = new GraphCompartmentRule()
  ): GraphCompartmentRule {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isGraphCompartmentRule(input?: unknown): input is GraphCompartmentRule {
    const castInput = input as GraphCompartmentRule;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GraphCompartmentRule";
  }

  public clone(): GraphCompartmentRule {
    const result = new GraphCompartmentRule();
    const parentClone = super.clone();
    result.id = parentClone.id;
    result.extension = parentClone.extension;
    result.value = this.value;
    return result;
  }

  public getTypeName(): string {
    return "GraphCompartmentRule";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

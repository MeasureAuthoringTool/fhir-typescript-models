/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  PrimitiveCode,
} from "../internal";

export class ConceptMapEquivalence extends PrimitiveCode {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConceptMapEquivalence";

  public static parsePrimitive(
    value: Parameters<typeof PrimitiveCode.parsePrimitive>[0],
    extension?: Parameters<typeof PrimitiveCode.parsePrimitive>[1],
    providedInstance: ConceptMapEquivalence = new ConceptMapEquivalence()
  ): ConceptMapEquivalence {
      return PrimitiveCode.parsePrimitive(value, extension, providedInstance);
  }

  public static isConceptMapEquivalence(input?: unknown): input is ConceptMapEquivalence {
    const castInput = input as ConceptMapEquivalence;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConceptMapEquivalence";
  }
  
  public getTypeName(): string {
    return "ConceptMapEquivalence";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

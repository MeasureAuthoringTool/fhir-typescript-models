/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  DocumentRelationshipType,
  Extension,
  ICompositionRelatesTo,
  Identifier,
  Reference,
} from "../internal";

export class CompositionRelatesTo extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Composition.RelatesTo";

  public code?: DocumentRelationshipType;

  public target?: Identifier | Reference;

  public static parse(
    json: ICompositionRelatesTo,
    providedInstance: CompositionRelatesTo = new CompositionRelatesTo()
  ): CompositionRelatesTo {
    const newInstance: CompositionRelatesTo = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = DocumentRelationshipType.parsePrimitive(json.code, json._code);
    }
    if (json.targetIdentifier) {
      newInstance.target = Identifier.parse(json.targetIdentifier);
    }
    if (json.targetReference) {
      newInstance.target = Reference.parse(json.targetReference);
    }
    return newInstance;
  }

  public static isCompositionRelatesTo(input?: unknown): input is CompositionRelatesTo {
    const castInput = input as CompositionRelatesTo;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CompositionRelatesTo";
  }

  public toJSON(): ICompositionRelatesTo {
    const result: ICompositionRelatesTo = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.target && Identifier.isIdentifier(this.target)) {
      result.targetIdentifier = this.target.toJSON();
    }

    if (this.target && Reference.isReference(this.target)) {
      result.targetReference = this.target.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "CompositionRelatesTo";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ConceptMapGroupElement,
  ConceptMapGroupUnmapped,
  Extension,
  IConceptMapGroup,
  PrimitiveString,
  PrimitiveUri,
} from "../internal";

export class ConceptMapGroup extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConceptMap.Group";

  public source?: PrimitiveUri;

  public sourceVersion?: PrimitiveString;

  public target?: PrimitiveUri;

  public targetVersion?: PrimitiveString;

  public element?: Array<ConceptMapGroupElement>;

  public unmapped?: ConceptMapGroupUnmapped;

  public static parse(
    json: IConceptMapGroup,
    providedInstance: ConceptMapGroup = new ConceptMapGroup()
  ): ConceptMapGroup {
    const newInstance: ConceptMapGroup = BackboneElement.parse(json, providedInstance);
  
    if (json.source) {
      newInstance.source = PrimitiveUri.parsePrimitive(json.source, json._source);
    }
    if (json.sourceVersion) {
      newInstance.sourceVersion = PrimitiveString.parsePrimitive(json.sourceVersion, json._sourceVersion);
    }
    if (json.target) {
      newInstance.target = PrimitiveUri.parsePrimitive(json.target, json._target);
    }
    if (json.targetVersion) {
      newInstance.targetVersion = PrimitiveString.parsePrimitive(json.targetVersion, json._targetVersion);
    }
    if (json.element) {
      newInstance.element = json.element.map((x) => ConceptMapGroupElement.parse(x));
    }
    if (json.unmapped) {
      newInstance.unmapped = ConceptMapGroupUnmapped.parse(json.unmapped);
    }
    return newInstance;
  }

  public static isConceptMapGroup(input?: unknown): input is ConceptMapGroup {
    const castInput = input as ConceptMapGroup;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConceptMapGroup";
  }

  public toJSON(): IConceptMapGroup {
    const result: IConceptMapGroup = super.toJSON();

    if (this.source) {
      result.source = this.source.value;
      result._source = Extension.serializePrimitiveExtension(this.source);
    }

    if (this.sourceVersion) {
      result.sourceVersion = this.sourceVersion.value;
      result._sourceVersion = Extension.serializePrimitiveExtension(this.sourceVersion);
    }

    if (this.target) {
      result.target = this.target.value;
      result._target = Extension.serializePrimitiveExtension(this.target);
    }

    if (this.targetVersion) {
      result.targetVersion = this.targetVersion.value;
      result._targetVersion = Extension.serializePrimitiveExtension(this.targetVersion);
    }

    if (this.element) {
      result.element = this.element.map((x) => x.toJSON());
    }

    if (this.unmapped) {
      result.unmapped = this.unmapped.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ConceptMapGroup";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

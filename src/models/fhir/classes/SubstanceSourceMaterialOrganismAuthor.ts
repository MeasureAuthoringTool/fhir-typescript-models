/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstanceSourceMaterialOrganismAuthor,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class SubstanceSourceMaterialOrganismAuthor extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSourceMaterial.Organism.Author";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "authorType",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "authorDescription",
      fieldType: [PrimitiveString],
      isArray: false
    }];
  }

  public authorType?: CodeableConcept;

  public authorDescription?: PrimitiveString;

  public static parse(
    json: ISubstanceSourceMaterialOrganismAuthor,
    providedInstance: SubstanceSourceMaterialOrganismAuthor = new SubstanceSourceMaterialOrganismAuthor()
  ): SubstanceSourceMaterialOrganismAuthor {
    const newInstance: SubstanceSourceMaterialOrganismAuthor = BackboneElement.parse(json, providedInstance);
  
    if (json.authorType !== undefined) {
      newInstance.authorType = CodeableConcept.parse(json.authorType);
    }
    if (json.authorDescription !== undefined) {
      newInstance.authorDescription = PrimitiveString.parsePrimitive(json.authorDescription, json._authorDescription);
    }
    return newInstance;
  }

  public static isSubstanceSourceMaterialOrganismAuthor(input?: unknown): input is SubstanceSourceMaterialOrganismAuthor {
    const castInput = input as SubstanceSourceMaterialOrganismAuthor;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSourceMaterialOrganismAuthor";
  }

  public toJSON(): ISubstanceSourceMaterialOrganismAuthor {
    const result: ISubstanceSourceMaterialOrganismAuthor = super.toJSON();

    if (this.authorType) {
      result.authorType = this.authorType.toJSON();
    }

    if (this.authorDescription) {
      result.authorDescription = this.authorDescription.value;
      result._authorDescription = Extension.serializePrimitiveExtension(this.authorDescription);
    }

    return result;
  }

  public clone(): SubstanceSourceMaterialOrganismAuthor {
    return SubstanceSourceMaterialOrganismAuthor.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSourceMaterialOrganismAuthor";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

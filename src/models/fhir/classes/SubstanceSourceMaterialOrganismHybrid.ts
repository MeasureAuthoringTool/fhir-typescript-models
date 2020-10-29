/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstanceSourceMaterialOrganismHybrid,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class SubstanceSourceMaterialOrganismHybrid extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSourceMaterial.Organism.Hybrid";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "maternalOrganismId",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "maternalOrganismName",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "paternalOrganismId",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "paternalOrganismName",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "hybridType",
      fieldType: [CodeableConcept],
      isArray: false
    }];
  }

  public maternalOrganismId?: PrimitiveString;

  public maternalOrganismName?: PrimitiveString;

  public paternalOrganismId?: PrimitiveString;

  public paternalOrganismName?: PrimitiveString;

  public hybridType?: CodeableConcept;

  public static parse(
    json: ISubstanceSourceMaterialOrganismHybrid,
    providedInstance: SubstanceSourceMaterialOrganismHybrid = new SubstanceSourceMaterialOrganismHybrid()
  ): SubstanceSourceMaterialOrganismHybrid {
    const newInstance: SubstanceSourceMaterialOrganismHybrid = BackboneElement.parse(json, providedInstance);
  
    if (json.maternalOrganismId !== undefined) {
      newInstance.maternalOrganismId = PrimitiveString.parsePrimitive(json.maternalOrganismId, json._maternalOrganismId);
    }
    if (json.maternalOrganismName !== undefined) {
      newInstance.maternalOrganismName = PrimitiveString.parsePrimitive(json.maternalOrganismName, json._maternalOrganismName);
    }
    if (json.paternalOrganismId !== undefined) {
      newInstance.paternalOrganismId = PrimitiveString.parsePrimitive(json.paternalOrganismId, json._paternalOrganismId);
    }
    if (json.paternalOrganismName !== undefined) {
      newInstance.paternalOrganismName = PrimitiveString.parsePrimitive(json.paternalOrganismName, json._paternalOrganismName);
    }
    if (json.hybridType !== undefined) {
      newInstance.hybridType = CodeableConcept.parse(json.hybridType);
    }
    return newInstance;
  }

  public static isSubstanceSourceMaterialOrganismHybrid(input?: unknown): input is SubstanceSourceMaterialOrganismHybrid {
    const castInput = input as SubstanceSourceMaterialOrganismHybrid;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSourceMaterialOrganismHybrid";
  }

  public toJSON(): ISubstanceSourceMaterialOrganismHybrid {
    const result: ISubstanceSourceMaterialOrganismHybrid = super.toJSON();

    if (this.maternalOrganismId) {
      result.maternalOrganismId = this.maternalOrganismId.value;
      result._maternalOrganismId = Extension.serializePrimitiveExtension(this.maternalOrganismId);
    }

    if (this.maternalOrganismName) {
      result.maternalOrganismName = this.maternalOrganismName.value;
      result._maternalOrganismName = Extension.serializePrimitiveExtension(this.maternalOrganismName);
    }

    if (this.paternalOrganismId) {
      result.paternalOrganismId = this.paternalOrganismId.value;
      result._paternalOrganismId = Extension.serializePrimitiveExtension(this.paternalOrganismId);
    }

    if (this.paternalOrganismName) {
      result.paternalOrganismName = this.paternalOrganismName.value;
      result._paternalOrganismName = Extension.serializePrimitiveExtension(this.paternalOrganismName);
    }

    if (this.hybridType) {
      result.hybridType = this.hybridType.toJSON();
    }

    return result;
  }

  public clone(): SubstanceSourceMaterialOrganismHybrid {
    return SubstanceSourceMaterialOrganismHybrid.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSourceMaterialOrganismHybrid";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

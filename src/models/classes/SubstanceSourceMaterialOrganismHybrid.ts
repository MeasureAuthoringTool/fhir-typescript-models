/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  ISubstanceSourceMaterialOrganismHybrid,
  PrimitiveString,
} from "../internal";

export class SubstanceSourceMaterialOrganismHybrid extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSourceMaterial.Organism.Hybrid";

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
  
    if (json.maternalOrganismId) {
      newInstance.maternalOrganismId = PrimitiveString.parsePrimitive(json.maternalOrganismId, json._maternalOrganismId);
    }
    if (json.maternalOrganismName) {
      newInstance.maternalOrganismName = PrimitiveString.parsePrimitive(json.maternalOrganismName, json._maternalOrganismName);
    }
    if (json.paternalOrganismId) {
      newInstance.paternalOrganismId = PrimitiveString.parsePrimitive(json.paternalOrganismId, json._paternalOrganismId);
    }
    if (json.paternalOrganismName) {
      newInstance.paternalOrganismName = PrimitiveString.parsePrimitive(json.paternalOrganismName, json._paternalOrganismName);
    }
    if (json.hybridType) {
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
  
  public getTypeName(): string {
    return "SubstanceSourceMaterialOrganismHybrid";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

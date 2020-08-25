/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  ISubstanceSourceMaterial,
  PrimitiveString,
  SubstanceSourceMaterialFractionDescription,
  SubstanceSourceMaterialOrganism,
  SubstanceSourceMaterialPartDescription,
} from "../internal";

export class SubstanceSourceMaterial extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceSourceMaterial";

  public sourceMaterialClass?: CodeableConcept;

  public sourceMaterialType?: CodeableConcept;

  public sourceMaterialState?: CodeableConcept;

  public organismId?: Identifier;

  public organismName?: PrimitiveString;

  public parentSubstanceId?: Array<Identifier>;

  public parentSubstanceName?: Array<PrimitiveString>;

  public countryOfOrigin?: Array<CodeableConcept>;

  public geographicalLocation?: Array<PrimitiveString>;

  public developmentStage?: CodeableConcept;

  public fractionDescription?: Array<SubstanceSourceMaterialFractionDescription>;

  public organism?: SubstanceSourceMaterialOrganism;

  public partDescription?: Array<SubstanceSourceMaterialPartDescription>;

  public static parse(
    json: ISubstanceSourceMaterial,
    providedInstance: SubstanceSourceMaterial = new SubstanceSourceMaterial()
  ): SubstanceSourceMaterial {
    const newInstance: SubstanceSourceMaterial = DomainResource.parse(json, providedInstance);
  
    if (json.sourceMaterialClass !== undefined) {
      newInstance.sourceMaterialClass = CodeableConcept.parse(json.sourceMaterialClass);
    }
    if (json.sourceMaterialType !== undefined) {
      newInstance.sourceMaterialType = CodeableConcept.parse(json.sourceMaterialType);
    }
    if (json.sourceMaterialState !== undefined) {
      newInstance.sourceMaterialState = CodeableConcept.parse(json.sourceMaterialState);
    }
    if (json.organismId !== undefined) {
      newInstance.organismId = Identifier.parse(json.organismId);
    }
    if (json.organismName !== undefined) {
      newInstance.organismName = PrimitiveString.parsePrimitive(json.organismName, json._organismName);
    }
    if (json.parentSubstanceId !== undefined) {
      newInstance.parentSubstanceId = json.parentSubstanceId.map((x) => Identifier.parse(x));
    }
    if (json.parentSubstanceName !== undefined) {
      newInstance.parentSubstanceName = json.parentSubstanceName.map((x, i) => {
        const ext = json._parentSubstanceName && json._parentSubstanceName[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.countryOfOrigin !== undefined) {
      newInstance.countryOfOrigin = json.countryOfOrigin.map((x) => CodeableConcept.parse(x));
    }
    if (json.geographicalLocation !== undefined) {
      newInstance.geographicalLocation = json.geographicalLocation.map((x, i) => {
        const ext = json._geographicalLocation && json._geographicalLocation[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.developmentStage !== undefined) {
      newInstance.developmentStage = CodeableConcept.parse(json.developmentStage);
    }
    if (json.fractionDescription !== undefined) {
      newInstance.fractionDescription = json.fractionDescription.map((x) => SubstanceSourceMaterialFractionDescription.parse(x));
    }
    if (json.organism !== undefined) {
      newInstance.organism = SubstanceSourceMaterialOrganism.parse(json.organism);
    }
    if (json.partDescription !== undefined) {
      newInstance.partDescription = json.partDescription.map((x) => SubstanceSourceMaterialPartDescription.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceSourceMaterial(input?: unknown): input is SubstanceSourceMaterial {
    const castInput = input as SubstanceSourceMaterial;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceSourceMaterial";
  }

  public toJSON(): ISubstanceSourceMaterial {
    const result: ISubstanceSourceMaterial = super.toJSON();

    if (this.sourceMaterialClass) {
      result.sourceMaterialClass = this.sourceMaterialClass.toJSON();
    }

    if (this.sourceMaterialType) {
      result.sourceMaterialType = this.sourceMaterialType.toJSON();
    }

    if (this.sourceMaterialState) {
      result.sourceMaterialState = this.sourceMaterialState.toJSON();
    }

    if (this.organismId) {
      result.organismId = this.organismId.toJSON();
    }

    if (this.organismName) {
      result.organismName = this.organismName.value;
      result._organismName = Extension.serializePrimitiveExtension(this.organismName);
    }

    if (this.parentSubstanceId) {
      result.parentSubstanceId = this.parentSubstanceId.map((x) => x.toJSON());
    }

    if (this.parentSubstanceName) {
      result.parentSubstanceName = this.parentSubstanceName.filter(x => !!x).map(x => x.value) as typeof result.parentSubstanceName;
      result._parentSubstanceName = Extension.serializePrimitiveExtensionArray(this.parentSubstanceName);
    }

    if (this.countryOfOrigin) {
      result.countryOfOrigin = this.countryOfOrigin.map((x) => x.toJSON());
    }

    if (this.geographicalLocation) {
      result.geographicalLocation = this.geographicalLocation.filter(x => !!x).map(x => x.value) as typeof result.geographicalLocation;
      result._geographicalLocation = Extension.serializePrimitiveExtensionArray(this.geographicalLocation);
    }

    if (this.developmentStage) {
      result.developmentStage = this.developmentStage.toJSON();
    }

    if (this.fractionDescription) {
      result.fractionDescription = this.fractionDescription.map((x) => x.toJSON());
    }

    if (this.organism) {
      result.organism = this.organism.toJSON();
    }

    if (this.partDescription) {
      result.partDescription = this.partDescription.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstanceSourceMaterial {
    return SubstanceSourceMaterial.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceSourceMaterial";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

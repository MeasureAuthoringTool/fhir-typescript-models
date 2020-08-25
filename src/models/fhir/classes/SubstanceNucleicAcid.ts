/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  ISubstanceNucleicAcid,
  PrimitiveInteger,
  PrimitiveString,
  SubstanceNucleicAcidSubunit,
} from "../internal";

export class SubstanceNucleicAcid extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceNucleicAcid";

  public sequenceType?: CodeableConcept;

  public numberOfSubunits?: PrimitiveInteger;

  public areaOfHybridisation?: PrimitiveString;

  public oligoNucleotideType?: CodeableConcept;

  public subunit?: Array<SubstanceNucleicAcidSubunit>;

  public static parse(
    json: ISubstanceNucleicAcid,
    providedInstance: SubstanceNucleicAcid = new SubstanceNucleicAcid()
  ): SubstanceNucleicAcid {
    const newInstance: SubstanceNucleicAcid = DomainResource.parse(json, providedInstance);
  
    if (json.sequenceType !== undefined) {
      newInstance.sequenceType = CodeableConcept.parse(json.sequenceType);
    }
    if (json.numberOfSubunits !== undefined) {
      newInstance.numberOfSubunits = PrimitiveInteger.parsePrimitive(json.numberOfSubunits, json._numberOfSubunits);
    }
    if (json.areaOfHybridisation !== undefined) {
      newInstance.areaOfHybridisation = PrimitiveString.parsePrimitive(json.areaOfHybridisation, json._areaOfHybridisation);
    }
    if (json.oligoNucleotideType !== undefined) {
      newInstance.oligoNucleotideType = CodeableConcept.parse(json.oligoNucleotideType);
    }
    if (json.subunit !== undefined) {
      newInstance.subunit = json.subunit.map((x) => SubstanceNucleicAcidSubunit.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceNucleicAcid(input?: unknown): input is SubstanceNucleicAcid {
    const castInput = input as SubstanceNucleicAcid;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceNucleicAcid";
  }

  public toJSON(): ISubstanceNucleicAcid {
    const result: ISubstanceNucleicAcid = super.toJSON();

    if (this.sequenceType) {
      result.sequenceType = this.sequenceType.toJSON();
    }

    if (this.numberOfSubunits) {
      result.numberOfSubunits = this.numberOfSubunits.value;
      result._numberOfSubunits = Extension.serializePrimitiveExtension(this.numberOfSubunits);
    }

    if (this.areaOfHybridisation) {
      result.areaOfHybridisation = this.areaOfHybridisation.value;
      result._areaOfHybridisation = Extension.serializePrimitiveExtension(this.areaOfHybridisation);
    }

    if (this.oligoNucleotideType) {
      result.oligoNucleotideType = this.oligoNucleotideType.toJSON();
    }

    if (this.subunit) {
      result.subunit = this.subunit.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstanceNucleicAcid {
    return SubstanceNucleicAcid.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceNucleicAcid";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  ISubstanceProtein,
  PrimitiveInteger,
  PrimitiveString,
  SubstanceProteinSubunit,
  FhirType
} from "../internal";

@FhirType("SubstanceProtein", "DomainResource")
export class SubstanceProtein extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceProtein";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public sequenceType?: CodeableConcept;

  @FhirField("PrimitiveInteger")
  public numberOfSubunits?: PrimitiveInteger;

  @FhirList("PrimitiveString")
  public disulfideLinkage?: Array<PrimitiveString>;

  @FhirList("SubstanceProteinSubunit")
  public subunit?: Array<SubstanceProteinSubunit>;

  public static parse(
    json: ISubstanceProtein,
    providedInstance: SubstanceProtein = new SubstanceProtein()
  ): SubstanceProtein {
    const newInstance: SubstanceProtein = DomainResource.parse(json, providedInstance);
  
    if (json.sequenceType !== undefined) {
      newInstance.sequenceType = CodeableConcept.parse(json.sequenceType);
    }
    if (json.numberOfSubunits !== undefined) {
      newInstance.numberOfSubunits = PrimitiveInteger.parsePrimitive(json.numberOfSubunits, json._numberOfSubunits);
    }
    if (json.disulfideLinkage !== undefined) {
      newInstance.disulfideLinkage = json.disulfideLinkage.map((x, i) => PrimitiveString.parsePrimitive(x, json._disulfideLinkage?.[i]));
    }
    if (json.subunit !== undefined) {
      newInstance.subunit = json.subunit.map((x) => SubstanceProteinSubunit.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceProtein(input?: unknown): input is SubstanceProtein {
    const castInput = input as SubstanceProtein;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceProtein";
  }

  public toJSON(): ISubstanceProtein {
    const result: ISubstanceProtein = super.toJSON();

    if (this.sequenceType) {
      result.sequenceType = this.sequenceType.toJSON();
    }

    if (this.numberOfSubunits) {
      result.numberOfSubunits = this.numberOfSubunits.value;
      result._numberOfSubunits = Extension.serializePrimitiveExtension(this.numberOfSubunits);
    }

    if (this.disulfideLinkage) {
      result.disulfideLinkage = this.disulfideLinkage.filter(x => !!x).map(x => x.value) as typeof result.disulfideLinkage;
      result._disulfideLinkage = Extension.serializePrimitiveExtensionArray(this.disulfideLinkage);
    }

    if (this.subunit) {
      result.subunit = this.subunit.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstanceProtein {
    return SubstanceProtein.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceProtein";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  ISubstanceNucleicAcidSubunit,
  PrimitiveInteger,
  PrimitiveString,
  SubstanceNucleicAcidSubunitLinkage,
  SubstanceNucleicAcidSubunitSugar,
  FhirType
} from "../internal";

@FhirType("SubstanceNucleicAcidSubunit", "BackboneElement")
export class SubstanceNucleicAcidSubunit extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceNucleicAcid.Subunit";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveInteger")
  public subunit?: PrimitiveInteger;

  @FhirField("PrimitiveString")
  public sequence?: PrimitiveString;

  @FhirField("PrimitiveInteger")
  public length?: PrimitiveInteger;

  @FhirField("Attachment")
  public sequenceAttachment?: Attachment;

  @FhirField("CodeableConcept")
  public fivePrime?: CodeableConcept;

  @FhirField("CodeableConcept")
  public threePrime?: CodeableConcept;

  @FhirList("SubstanceNucleicAcidSubunitLinkage")
  public linkage?: Array<SubstanceNucleicAcidSubunitLinkage>;

  @FhirList("SubstanceNucleicAcidSubunitSugar")
  public sugar?: Array<SubstanceNucleicAcidSubunitSugar>;

  public static parse(
    json: ISubstanceNucleicAcidSubunit,
    providedInstance: SubstanceNucleicAcidSubunit = new SubstanceNucleicAcidSubunit()
  ): SubstanceNucleicAcidSubunit {
    const newInstance: SubstanceNucleicAcidSubunit = BackboneElement.parse(json, providedInstance);
  
    if (json.subunit !== undefined) {
      newInstance.subunit = PrimitiveInteger.parsePrimitive(json.subunit, json._subunit);
    }
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitiveString.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.length !== undefined) {
      newInstance.length = PrimitiveInteger.parsePrimitive(json.length, json._length);
    }
    if (json.sequenceAttachment !== undefined) {
      newInstance.sequenceAttachment = Attachment.parse(json.sequenceAttachment);
    }
    if (json.fivePrime !== undefined) {
      newInstance.fivePrime = CodeableConcept.parse(json.fivePrime);
    }
    if (json.threePrime !== undefined) {
      newInstance.threePrime = CodeableConcept.parse(json.threePrime);
    }
    if (json.linkage !== undefined) {
      newInstance.linkage = json.linkage.map((x) => SubstanceNucleicAcidSubunitLinkage.parse(x));
    }
    if (json.sugar !== undefined) {
      newInstance.sugar = json.sugar.map((x) => SubstanceNucleicAcidSubunitSugar.parse(x));
    }
    return newInstance;
  }

  public static isSubstanceNucleicAcidSubunit(input?: unknown): input is SubstanceNucleicAcidSubunit {
    const castInput = input as SubstanceNucleicAcidSubunit;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceNucleicAcidSubunit";
  }

  public toJSON(): ISubstanceNucleicAcidSubunit {
    const result: ISubstanceNucleicAcidSubunit = super.toJSON();

    if (this.subunit) {
      result.subunit = this.subunit.value;
      result._subunit = Extension.serializePrimitiveExtension(this.subunit);
    }

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.length) {
      result.length = this.length.value;
      result._length = Extension.serializePrimitiveExtension(this.length);
    }

    if (this.sequenceAttachment) {
      result.sequenceAttachment = this.sequenceAttachment.toJSON();
    }

    if (this.fivePrime) {
      result.fivePrime = this.fivePrime.toJSON();
    }

    if (this.threePrime) {
      result.threePrime = this.threePrime.toJSON();
    }

    if (this.linkage) {
      result.linkage = this.linkage.map((x) => x.toJSON());
    }

    if (this.sugar) {
      result.sugar = this.sugar.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): SubstanceNucleicAcidSubunit {
    return SubstanceNucleicAcidSubunit.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceNucleicAcidSubunit";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  BackboneElement,
  Extension,
  FhirField,
  Identifier,
  ISubstanceProteinSubunit,
  PrimitiveInteger,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("SubstanceProteinSubunit", "BackboneElement")
export class SubstanceProteinSubunit extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "SubstanceProtein.Subunit";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveInteger")
  public subunit?: PrimitiveInteger;

  @FhirField("PrimitiveString")
  public sequence?: PrimitiveString;

  @FhirField("PrimitiveInteger")
  public length?: PrimitiveInteger;

  @FhirField("Attachment")
  public sequenceAttachment?: Attachment;

  @FhirField("Identifier")
  public nTerminalModificationId?: Identifier;

  @FhirField("PrimitiveString")
  public nTerminalModification?: PrimitiveString;

  @FhirField("Identifier")
  public cTerminalModificationId?: Identifier;

  @FhirField("PrimitiveString")
  public cTerminalModification?: PrimitiveString;

  public static parse(
    json: ISubstanceProteinSubunit,
    providedInstance: SubstanceProteinSubunit = new SubstanceProteinSubunit()
  ): SubstanceProteinSubunit {
    const newInstance: SubstanceProteinSubunit = BackboneElement.parse(json, providedInstance);
  
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
    if (json.nTerminalModificationId !== undefined) {
      newInstance.nTerminalModificationId = Identifier.parse(json.nTerminalModificationId);
    }
    if (json.nTerminalModification !== undefined) {
      newInstance.nTerminalModification = PrimitiveString.parsePrimitive(json.nTerminalModification, json._nTerminalModification);
    }
    if (json.cTerminalModificationId !== undefined) {
      newInstance.cTerminalModificationId = Identifier.parse(json.cTerminalModificationId);
    }
    if (json.cTerminalModification !== undefined) {
      newInstance.cTerminalModification = PrimitiveString.parsePrimitive(json.cTerminalModification, json._cTerminalModification);
    }
    return newInstance;
  }

  public static isSubstanceProteinSubunit(input?: unknown): input is SubstanceProteinSubunit {
    const castInput = input as SubstanceProteinSubunit;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceProteinSubunit";
  }

  public toJSON(): ISubstanceProteinSubunit {
    const result: ISubstanceProteinSubunit = super.toJSON();

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

    if (this.nTerminalModificationId) {
      result.nTerminalModificationId = this.nTerminalModificationId.toJSON();
    }

    if (this.nTerminalModification) {
      result.nTerminalModification = this.nTerminalModification.value;
      result._nTerminalModification = Extension.serializePrimitiveExtension(this.nTerminalModification);
    }

    if (this.cTerminalModificationId) {
      result.cTerminalModificationId = this.cTerminalModificationId.toJSON();
    }

    if (this.cTerminalModification) {
      result.cTerminalModification = this.cTerminalModification.value;
      result._cTerminalModification = Extension.serializePrimitiveExtension(this.cTerminalModification);
    }

    return result;
  }

  public clone(): SubstanceProteinSubunit {
    return SubstanceProteinSubunit.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceProteinSubunit";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

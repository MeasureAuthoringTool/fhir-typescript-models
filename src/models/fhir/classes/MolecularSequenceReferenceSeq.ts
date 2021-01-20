/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IMolecularSequenceReferenceSeq,
  OrientationType,
  PrimitiveInteger,
  PrimitiveString,
  Reference,
  StrandType,
  FhirType
} from "../internal";

@FhirType("MolecularSequenceReferenceSeq", "BackboneElement")
export class MolecularSequenceReferenceSeq extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MolecularSequence.ReferenceSeq";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public chromosome?: CodeableConcept;

  @FhirField("PrimitiveString")
  public genomeBuild?: PrimitiveString;

  @FhirField("OrientationType")
  public orientation?: OrientationType;

  @FhirField("CodeableConcept")
  public referenceSeqId?: CodeableConcept;

  @FhirField("Reference")
  public referenceSeqPointer?: Reference;

  @FhirField("PrimitiveString")
  public referenceSeqString?: PrimitiveString;

  @FhirField("StrandType")
  public strand?: StrandType;

  @FhirField("PrimitiveInteger")
  public windowStart?: PrimitiveInteger;

  @FhirField("PrimitiveInteger")
  public windowEnd?: PrimitiveInteger;

  public static parse(
    json: IMolecularSequenceReferenceSeq,
    providedInstance: MolecularSequenceReferenceSeq = new MolecularSequenceReferenceSeq()
  ): MolecularSequenceReferenceSeq {
    const newInstance: MolecularSequenceReferenceSeq = BackboneElement.parse(json, providedInstance);
  
    if (json.chromosome !== undefined) {
      newInstance.chromosome = CodeableConcept.parse(json.chromosome);
    }
    if (json.genomeBuild !== undefined) {
      newInstance.genomeBuild = PrimitiveString.parsePrimitive(json.genomeBuild, json._genomeBuild);
    }
    if (json.orientation !== undefined) {
      newInstance.orientation = OrientationType.parsePrimitive(json.orientation, json._orientation);
    }
    if (json.referenceSeqId !== undefined) {
      newInstance.referenceSeqId = CodeableConcept.parse(json.referenceSeqId);
    }
    if (json.referenceSeqPointer !== undefined) {
      newInstance.referenceSeqPointer = Reference.parse(json.referenceSeqPointer);
    }
    if (json.referenceSeqString !== undefined) {
      newInstance.referenceSeqString = PrimitiveString.parsePrimitive(json.referenceSeqString, json._referenceSeqString);
    }
    if (json.strand !== undefined) {
      newInstance.strand = StrandType.parsePrimitive(json.strand, json._strand);
    }
    if (json.windowStart !== undefined) {
      newInstance.windowStart = PrimitiveInteger.parsePrimitive(json.windowStart, json._windowStart);
    }
    if (json.windowEnd !== undefined) {
      newInstance.windowEnd = PrimitiveInteger.parsePrimitive(json.windowEnd, json._windowEnd);
    }
    return newInstance;
  }

  public static isMolecularSequenceReferenceSeq(input?: unknown): input is MolecularSequenceReferenceSeq {
    const castInput = input as MolecularSequenceReferenceSeq;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MolecularSequenceReferenceSeq";
  }

  public toJSON(): IMolecularSequenceReferenceSeq {
    const result: IMolecularSequenceReferenceSeq = super.toJSON();

    if (this.chromosome) {
      result.chromosome = this.chromosome.toJSON();
    }

    if (this.genomeBuild) {
      result.genomeBuild = this.genomeBuild.value;
      result._genomeBuild = Extension.serializePrimitiveExtension(this.genomeBuild);
    }

    if (this.orientation) {
      result.orientation = this.orientation.value;
      result._orientation = Extension.serializePrimitiveExtension(this.orientation);
    }

    if (this.referenceSeqId) {
      result.referenceSeqId = this.referenceSeqId.toJSON();
    }

    if (this.referenceSeqPointer) {
      result.referenceSeqPointer = this.referenceSeqPointer.toJSON();
    }

    if (this.referenceSeqString) {
      result.referenceSeqString = this.referenceSeqString.value;
      result._referenceSeqString = Extension.serializePrimitiveExtension(this.referenceSeqString);
    }

    if (this.strand) {
      result.strand = this.strand.value;
      result._strand = Extension.serializePrimitiveExtension(this.strand);
    }

    if (this.windowStart) {
      result.windowStart = this.windowStart.value;
      result._windowStart = Extension.serializePrimitiveExtension(this.windowStart);
    }

    if (this.windowEnd) {
      result.windowEnd = this.windowEnd.value;
      result._windowEnd = Extension.serializePrimitiveExtension(this.windowEnd);
    }

    return result;
  }

  public clone(): MolecularSequenceReferenceSeq {
    return MolecularSequenceReferenceSeq.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MolecularSequenceReferenceSeq";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

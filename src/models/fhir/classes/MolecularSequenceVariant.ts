/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IMolecularSequenceVariant,
  PrimitiveInteger,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("MolecularSequenceVariant", "BackboneElement")
export class MolecularSequenceVariant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MolecularSequence.Variant";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveInteger")
  public start?: PrimitiveInteger;

  @FhirField("PrimitiveInteger")
  public end?: PrimitiveInteger;

  @FhirField("PrimitiveString")
  public observedAllele?: PrimitiveString;

  @FhirField("PrimitiveString")
  public referenceAllele?: PrimitiveString;

  @FhirField("PrimitiveString")
  public cigar?: PrimitiveString;

  @FhirField("Reference")
  public variantPointer?: Reference;

  public static parse(
    json: IMolecularSequenceVariant,
    providedInstance: MolecularSequenceVariant = new MolecularSequenceVariant()
  ): MolecularSequenceVariant {
    const newInstance: MolecularSequenceVariant = BackboneElement.parse(json, providedInstance);
  
    if (json.start !== undefined) {
      newInstance.start = PrimitiveInteger.parsePrimitive(json.start, json._start);
    }
    if (json.end !== undefined) {
      newInstance.end = PrimitiveInteger.parsePrimitive(json.end, json._end);
    }
    if (json.observedAllele !== undefined) {
      newInstance.observedAllele = PrimitiveString.parsePrimitive(json.observedAllele, json._observedAllele);
    }
    if (json.referenceAllele !== undefined) {
      newInstance.referenceAllele = PrimitiveString.parsePrimitive(json.referenceAllele, json._referenceAllele);
    }
    if (json.cigar !== undefined) {
      newInstance.cigar = PrimitiveString.parsePrimitive(json.cigar, json._cigar);
    }
    if (json.variantPointer !== undefined) {
      newInstance.variantPointer = Reference.parse(json.variantPointer);
    }
    return newInstance;
  }

  public static isMolecularSequenceVariant(input?: unknown): input is MolecularSequenceVariant {
    const castInput = input as MolecularSequenceVariant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MolecularSequenceVariant";
  }

  public toJSON(): IMolecularSequenceVariant {
    const result: IMolecularSequenceVariant = super.toJSON();

    if (this.start) {
      result.start = this.start.value;
      result._start = Extension.serializePrimitiveExtension(this.start);
    }

    if (this.end) {
      result.end = this.end.value;
      result._end = Extension.serializePrimitiveExtension(this.end);
    }

    if (this.observedAllele) {
      result.observedAllele = this.observedAllele.value;
      result._observedAllele = Extension.serializePrimitiveExtension(this.observedAllele);
    }

    if (this.referenceAllele) {
      result.referenceAllele = this.referenceAllele.value;
      result._referenceAllele = Extension.serializePrimitiveExtension(this.referenceAllele);
    }

    if (this.cigar) {
      result.cigar = this.cigar.value;
      result._cigar = Extension.serializePrimitiveExtension(this.cigar);
    }

    if (this.variantPointer) {
      result.variantPointer = this.variantPointer.toJSON();
    }

    return result;
  }

  public clone(): MolecularSequenceVariant {
    return MolecularSequenceVariant.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MolecularSequenceVariant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

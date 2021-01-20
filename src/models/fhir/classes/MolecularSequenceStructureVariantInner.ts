/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IMolecularSequenceStructureVariantInner,
  PrimitiveInteger,
  FhirType
} from "../internal";

@FhirType("MolecularSequenceStructureVariantInner", "BackboneElement")
export class MolecularSequenceStructureVariantInner extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MolecularSequence.StructureVariant.Inner";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveInteger")
  public start?: PrimitiveInteger;

  @FhirField("PrimitiveInteger")
  public end?: PrimitiveInteger;

  public static parse(
    json: IMolecularSequenceStructureVariantInner,
    providedInstance: MolecularSequenceStructureVariantInner = new MolecularSequenceStructureVariantInner()
  ): MolecularSequenceStructureVariantInner {
    const newInstance: MolecularSequenceStructureVariantInner = BackboneElement.parse(json, providedInstance);
  
    if (json.start !== undefined) {
      newInstance.start = PrimitiveInteger.parsePrimitive(json.start, json._start);
    }
    if (json.end !== undefined) {
      newInstance.end = PrimitiveInteger.parsePrimitive(json.end, json._end);
    }
    return newInstance;
  }

  public static isMolecularSequenceStructureVariantInner(input?: unknown): input is MolecularSequenceStructureVariantInner {
    const castInput = input as MolecularSequenceStructureVariantInner;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MolecularSequenceStructureVariantInner";
  }

  public toJSON(): IMolecularSequenceStructureVariantInner {
    const result: IMolecularSequenceStructureVariantInner = super.toJSON();

    if (this.start) {
      result.start = this.start.value;
      result._start = Extension.serializePrimitiveExtension(this.start);
    }

    if (this.end) {
      result.end = this.end.value;
      result._end = Extension.serializePrimitiveExtension(this.end);
    }

    return result;
  }

  public clone(): MolecularSequenceStructureVariantInner {
    return MolecularSequenceStructureVariantInner.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MolecularSequenceStructureVariantInner";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

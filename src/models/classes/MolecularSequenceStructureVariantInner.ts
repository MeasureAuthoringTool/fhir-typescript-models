/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IMolecularSequenceStructureVariantInner,
  PrimitiveInteger,
} from "../internal";

export class MolecularSequenceStructureVariantInner extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MolecularSequence.StructureVariant.Inner";

  public start?: PrimitiveInteger;

  public end?: PrimitiveInteger;

  public static parse(
    json: IMolecularSequenceStructureVariantInner,
    providedInstance: MolecularSequenceStructureVariantInner = new MolecularSequenceStructureVariantInner()
  ): MolecularSequenceStructureVariantInner {
    const newInstance: MolecularSequenceStructureVariantInner = BackboneElement.parse(json, providedInstance);
  
    if (json.start) {
      newInstance.start = PrimitiveInteger.parsePrimitive(json.start, json._start);
    }
    if (json.end) {
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
  
  public getTypeName(): string {
    return "MolecularSequenceStructureVariantInner";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IMolecularSequenceStructureVariantOuter,
  PrimitiveInteger,
  FhirType
} from "../internal";

@FhirType("MolecularSequenceStructureVariantOuter", "BackboneElement")
export class MolecularSequenceStructureVariantOuter extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MolecularSequence.StructureVariant.Outer";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveInteger")
  public start?: PrimitiveInteger;

  @FhirField("PrimitiveInteger")
  public end?: PrimitiveInteger;

  public static parse(
    json: IMolecularSequenceStructureVariantOuter,
    providedInstance: MolecularSequenceStructureVariantOuter = new MolecularSequenceStructureVariantOuter()
  ): MolecularSequenceStructureVariantOuter {
    const newInstance: MolecularSequenceStructureVariantOuter = BackboneElement.parse(json, providedInstance);
  
    if (json.start !== undefined) {
      newInstance.start = PrimitiveInteger.parsePrimitive(json.start, json._start);
    }
    if (json.end !== undefined) {
      newInstance.end = PrimitiveInteger.parsePrimitive(json.end, json._end);
    }
    return newInstance;
  }

  public static isMolecularSequenceStructureVariantOuter(input?: unknown): input is MolecularSequenceStructureVariantOuter {
    const castInput = input as MolecularSequenceStructureVariantOuter;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MolecularSequenceStructureVariantOuter";
  }

  public toJSON(): IMolecularSequenceStructureVariantOuter {
    const result: IMolecularSequenceStructureVariantOuter = super.toJSON();

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

  public clone(): MolecularSequenceStructureVariantOuter {
    return MolecularSequenceStructureVariantOuter.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MolecularSequenceStructureVariantOuter";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

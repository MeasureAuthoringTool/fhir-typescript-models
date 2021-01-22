/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IMolecularSequenceStructureVariant,
  MolecularSequenceStructureVariantInner,
  MolecularSequenceStructureVariantOuter,
  PrimitiveBoolean,
  PrimitiveInteger,
  FhirType
} from "../internal";

@FhirType("MolecularSequenceStructureVariant", "BackboneElement")
export class MolecularSequenceStructureVariant extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MolecularSequence.StructureVariant";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public variantType?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public exact?: PrimitiveBoolean;

  @FhirField("PrimitiveInteger")
  public length?: PrimitiveInteger;

  @FhirField("MolecularSequenceStructureVariantOuter")
  public outer?: MolecularSequenceStructureVariantOuter;

  @FhirField("MolecularSequenceStructureVariantInner")
  public inner?: MolecularSequenceStructureVariantInner;

  public static parse(
    json: IMolecularSequenceStructureVariant,
    providedInstance: MolecularSequenceStructureVariant = new MolecularSequenceStructureVariant()
  ): MolecularSequenceStructureVariant {
    const newInstance: MolecularSequenceStructureVariant = BackboneElement.parse(json, providedInstance);
  
    if (json.variantType !== undefined) {
      newInstance.variantType = CodeableConcept.parse(json.variantType);
    }
    if (json.exact !== undefined) {
      newInstance.exact = PrimitiveBoolean.parsePrimitive(json.exact, json._exact);
    }
    if (json.length !== undefined) {
      newInstance.length = PrimitiveInteger.parsePrimitive(json.length, json._length);
    }
    if (json.outer !== undefined) {
      newInstance.outer = MolecularSequenceStructureVariantOuter.parse(json.outer);
    }
    if (json.inner !== undefined) {
      newInstance.inner = MolecularSequenceStructureVariantInner.parse(json.inner);
    }
    return newInstance;
  }

  public static isMolecularSequenceStructureVariant(input?: unknown): input is MolecularSequenceStructureVariant {
    const castInput = input as MolecularSequenceStructureVariant;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MolecularSequenceStructureVariant";
  }

  public toJSON(): IMolecularSequenceStructureVariant {
    const result: IMolecularSequenceStructureVariant = super.toJSON();

    if (this.variantType) {
      result.variantType = this.variantType.toJSON();
    }

    if (this.exact) {
      result.exact = this.exact.value;
      result._exact = Extension.serializePrimitiveExtension(this.exact);
    }

    if (this.length) {
      result.length = this.length.value;
      result._length = Extension.serializePrimitiveExtension(this.length);
    }

    if (this.outer) {
      result.outer = this.outer.toJSON();
    }

    if (this.inner) {
      result.inner = this.inner.toJSON();
    }

    return result;
  }

  public clone(): MolecularSequenceStructureVariant {
    return MolecularSequenceStructureVariant.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MolecularSequenceStructureVariant";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

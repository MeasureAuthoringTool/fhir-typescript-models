/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  Identifier,
  IMolecularSequence,
  MolecularSequenceQuality,
  MolecularSequenceReferenceSeq,
  MolecularSequenceRepository,
  MolecularSequenceStructureVariant,
  MolecularSequenceVariant,
  PrimitiveInteger,
  PrimitiveString,
  Quantity,
  Reference,
  SequenceType,
  FhirType
} from "../internal";

@FhirType("MolecularSequence", "DomainResource")
export class MolecularSequence extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MolecularSequence";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("SequenceType")
  public type?: SequenceType;

  @FhirField("PrimitiveInteger")
  public coordinateSystem?: PrimitiveInteger;

  @FhirField("Reference")
  public patient?: Reference;

  @FhirField("Reference")
  public specimen?: Reference;

  @FhirField("Reference")
  public device?: Reference;

  @FhirField("Reference")
  public performer?: Reference;

  @FhirField("Quantity")
  public quantity?: Quantity;

  @FhirField("MolecularSequenceReferenceSeq")
  public referenceSeq?: MolecularSequenceReferenceSeq;

  @FhirList("MolecularSequenceVariant")
  public variant?: Array<MolecularSequenceVariant>;

  @FhirField("PrimitiveString")
  public observedSeq?: PrimitiveString;

  @FhirList("MolecularSequenceQuality")
  public quality?: Array<MolecularSequenceQuality>;

  @FhirField("PrimitiveInteger")
  public readCoverage?: PrimitiveInteger;

  @FhirList("MolecularSequenceRepository")
  public repository?: Array<MolecularSequenceRepository>;

  @FhirList("Reference")
  public pointer?: Array<Reference>;

  @FhirList("MolecularSequenceStructureVariant")
  public structureVariant?: Array<MolecularSequenceStructureVariant>;

  public static parse(
    json: IMolecularSequence,
    providedInstance: MolecularSequence = new MolecularSequence()
  ): MolecularSequence {
    const newInstance: MolecularSequence = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.type !== undefined) {
      newInstance.type = SequenceType.parsePrimitive(json.type, json._type);
    }
    if (json.coordinateSystem !== undefined) {
      newInstance.coordinateSystem = PrimitiveInteger.parsePrimitive(json.coordinateSystem, json._coordinateSystem);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.specimen !== undefined) {
      newInstance.specimen = Reference.parse(json.specimen);
    }
    if (json.device !== undefined) {
      newInstance.device = Reference.parse(json.device);
    }
    if (json.performer !== undefined) {
      newInstance.performer = Reference.parse(json.performer);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = Quantity.parse(json.quantity);
    }
    if (json.referenceSeq !== undefined) {
      newInstance.referenceSeq = MolecularSequenceReferenceSeq.parse(json.referenceSeq);
    }
    if (json.variant !== undefined) {
      newInstance.variant = json.variant.map((x) => MolecularSequenceVariant.parse(x));
    }
    if (json.observedSeq !== undefined) {
      newInstance.observedSeq = PrimitiveString.parsePrimitive(json.observedSeq, json._observedSeq);
    }
    if (json.quality !== undefined) {
      newInstance.quality = json.quality.map((x) => MolecularSequenceQuality.parse(x));
    }
    if (json.readCoverage !== undefined) {
      newInstance.readCoverage = PrimitiveInteger.parsePrimitive(json.readCoverage, json._readCoverage);
    }
    if (json.repository !== undefined) {
      newInstance.repository = json.repository.map((x) => MolecularSequenceRepository.parse(x));
    }
    if (json.pointer !== undefined) {
      newInstance.pointer = json.pointer.map((x) => Reference.parse(x));
    }
    if (json.structureVariant !== undefined) {
      newInstance.structureVariant = json.structureVariant.map((x) => MolecularSequenceStructureVariant.parse(x));
    }
    return newInstance;
  }

  public static isMolecularSequence(input?: unknown): input is MolecularSequence {
    const castInput = input as MolecularSequence;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MolecularSequence";
  }

  public toJSON(): IMolecularSequence {
    const result: IMolecularSequence = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.coordinateSystem) {
      result.coordinateSystem = this.coordinateSystem.value;
      result._coordinateSystem = Extension.serializePrimitiveExtension(this.coordinateSystem);
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.specimen) {
      result.specimen = this.specimen.toJSON();
    }

    if (this.device) {
      result.device = this.device.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.toJSON();
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.referenceSeq) {
      result.referenceSeq = this.referenceSeq.toJSON();
    }

    if (this.variant) {
      result.variant = this.variant.map((x) => x.toJSON());
    }

    if (this.observedSeq) {
      result.observedSeq = this.observedSeq.value;
      result._observedSeq = Extension.serializePrimitiveExtension(this.observedSeq);
    }

    if (this.quality) {
      result.quality = this.quality.map((x) => x.toJSON());
    }

    if (this.readCoverage) {
      result.readCoverage = this.readCoverage.value;
      result._readCoverage = Extension.serializePrimitiveExtension(this.readCoverage);
    }

    if (this.repository) {
      result.repository = this.repository.map((x) => x.toJSON());
    }

    if (this.pointer) {
      result.pointer = this.pointer.map((x) => x.toJSON());
    }

    if (this.structureVariant) {
      result.structureVariant = this.structureVariant.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MolecularSequence {
    return MolecularSequence.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MolecularSequence";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

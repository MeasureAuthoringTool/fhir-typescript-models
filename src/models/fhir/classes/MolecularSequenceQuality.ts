/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IMolecularSequenceQuality,
  MolecularSequenceQualityRoc,
  PrimitiveDecimal,
  PrimitiveInteger,
  QualityType,
  Quantity,
  FhirType
} from "../internal";

@FhirType("MolecularSequenceQuality", "BackboneElement")
export class MolecularSequenceQuality extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MolecularSequence.Quality";

  static readonly primaryCodePath: string | null = null;

  @FhirField("QualityType")
  public type?: QualityType;

  @FhirField("CodeableConcept")
  public standardSequence?: CodeableConcept;

  @FhirField("PrimitiveInteger")
  public start?: PrimitiveInteger;

  @FhirField("PrimitiveInteger")
  public end?: PrimitiveInteger;

  @FhirField("Quantity")
  public score?: Quantity;

  @FhirField("CodeableConcept")
  public method?: CodeableConcept;

  @FhirField("PrimitiveDecimal")
  public truthTP?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public queryTP?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public truthFN?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public queryFP?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public gtFP?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public precision?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public recall?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public fScore?: PrimitiveDecimal;

  @FhirField("MolecularSequenceQualityRoc")
  public roc?: MolecularSequenceQualityRoc;

  public static parse(
    json: IMolecularSequenceQuality,
    providedInstance: MolecularSequenceQuality = new MolecularSequenceQuality()
  ): MolecularSequenceQuality {
    const newInstance: MolecularSequenceQuality = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = QualityType.parsePrimitive(json.type, json._type);
    }
    if (json.standardSequence !== undefined) {
      newInstance.standardSequence = CodeableConcept.parse(json.standardSequence);
    }
    if (json.start !== undefined) {
      newInstance.start = PrimitiveInteger.parsePrimitive(json.start, json._start);
    }
    if (json.end !== undefined) {
      newInstance.end = PrimitiveInteger.parsePrimitive(json.end, json._end);
    }
    if (json.score !== undefined) {
      newInstance.score = Quantity.parse(json.score);
    }
    if (json.method !== undefined) {
      newInstance.method = CodeableConcept.parse(json.method);
    }
    if (json.truthTP !== undefined) {
      newInstance.truthTP = PrimitiveDecimal.parsePrimitive(json.truthTP, json._truthTP);
    }
    if (json.queryTP !== undefined) {
      newInstance.queryTP = PrimitiveDecimal.parsePrimitive(json.queryTP, json._queryTP);
    }
    if (json.truthFN !== undefined) {
      newInstance.truthFN = PrimitiveDecimal.parsePrimitive(json.truthFN, json._truthFN);
    }
    if (json.queryFP !== undefined) {
      newInstance.queryFP = PrimitiveDecimal.parsePrimitive(json.queryFP, json._queryFP);
    }
    if (json.gtFP !== undefined) {
      newInstance.gtFP = PrimitiveDecimal.parsePrimitive(json.gtFP, json._gtFP);
    }
    if (json.precision !== undefined) {
      newInstance.precision = PrimitiveDecimal.parsePrimitive(json.precision, json._precision);
    }
    if (json.recall !== undefined) {
      newInstance.recall = PrimitiveDecimal.parsePrimitive(json.recall, json._recall);
    }
    if (json.fScore !== undefined) {
      newInstance.fScore = PrimitiveDecimal.parsePrimitive(json.fScore, json._fScore);
    }
    if (json.roc !== undefined) {
      newInstance.roc = MolecularSequenceQualityRoc.parse(json.roc);
    }
    return newInstance;
  }

  public static isMolecularSequenceQuality(input?: unknown): input is MolecularSequenceQuality {
    const castInput = input as MolecularSequenceQuality;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MolecularSequenceQuality";
  }

  public toJSON(): IMolecularSequenceQuality {
    const result: IMolecularSequenceQuality = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.standardSequence) {
      result.standardSequence = this.standardSequence.toJSON();
    }

    if (this.start) {
      result.start = this.start.value;
      result._start = Extension.serializePrimitiveExtension(this.start);
    }

    if (this.end) {
      result.end = this.end.value;
      result._end = Extension.serializePrimitiveExtension(this.end);
    }

    if (this.score) {
      result.score = this.score.toJSON();
    }

    if (this.method) {
      result.method = this.method.toJSON();
    }

    if (this.truthTP) {
      result.truthTP = this.truthTP.value;
      result._truthTP = Extension.serializePrimitiveExtension(this.truthTP);
    }

    if (this.queryTP) {
      result.queryTP = this.queryTP.value;
      result._queryTP = Extension.serializePrimitiveExtension(this.queryTP);
    }

    if (this.truthFN) {
      result.truthFN = this.truthFN.value;
      result._truthFN = Extension.serializePrimitiveExtension(this.truthFN);
    }

    if (this.queryFP) {
      result.queryFP = this.queryFP.value;
      result._queryFP = Extension.serializePrimitiveExtension(this.queryFP);
    }

    if (this.gtFP) {
      result.gtFP = this.gtFP.value;
      result._gtFP = Extension.serializePrimitiveExtension(this.gtFP);
    }

    if (this.precision) {
      result.precision = this.precision.value;
      result._precision = Extension.serializePrimitiveExtension(this.precision);
    }

    if (this.recall) {
      result.recall = this.recall.value;
      result._recall = Extension.serializePrimitiveExtension(this.recall);
    }

    if (this.fScore) {
      result.fScore = this.fScore.value;
      result._fScore = Extension.serializePrimitiveExtension(this.fScore);
    }

    if (this.roc) {
      result.roc = this.roc.toJSON();
    }

    return result;
  }

  public clone(): MolecularSequenceQuality {
    return MolecularSequenceQuality.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MolecularSequenceQuality";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

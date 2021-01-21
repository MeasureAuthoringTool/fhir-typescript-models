/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirList,
  IMolecularSequenceQualityRoc,
  PrimitiveDecimal,
  PrimitiveInteger,
  FhirType
} from "../internal";

@FhirType("MolecularSequenceQualityRoc", "BackboneElement")
export class MolecularSequenceQualityRoc extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MolecularSequence.Quality.Roc";

  static readonly primaryCodePath: string | null = null;

  @FhirList("PrimitiveInteger")
  public score?: Array<PrimitiveInteger>;

  @FhirList("PrimitiveInteger")
  public numTP?: Array<PrimitiveInteger>;

  @FhirList("PrimitiveInteger")
  public numFP?: Array<PrimitiveInteger>;

  @FhirList("PrimitiveInteger")
  public numFN?: Array<PrimitiveInteger>;

  @FhirList("PrimitiveDecimal")
  public precision?: Array<PrimitiveDecimal>;

  @FhirList("PrimitiveDecimal")
  public sensitivity?: Array<PrimitiveDecimal>;

  @FhirList("PrimitiveDecimal")
  public fMeasure?: Array<PrimitiveDecimal>;

  public static parse(
    json: IMolecularSequenceQualityRoc,
    providedInstance: MolecularSequenceQualityRoc = new MolecularSequenceQualityRoc()
  ): MolecularSequenceQualityRoc {
    const newInstance: MolecularSequenceQualityRoc = BackboneElement.parse(json, providedInstance);
  
    if (json.score !== undefined) {
      newInstance.score = json.score.map((x, i) => PrimitiveInteger.parsePrimitive(x, json._score?.[i]));
    }
    if (json.numTP !== undefined) {
      newInstance.numTP = json.numTP.map((x, i) => PrimitiveInteger.parsePrimitive(x, json._numTP?.[i]));
    }
    if (json.numFP !== undefined) {
      newInstance.numFP = json.numFP.map((x, i) => PrimitiveInteger.parsePrimitive(x, json._numFP?.[i]));
    }
    if (json.numFN !== undefined) {
      newInstance.numFN = json.numFN.map((x, i) => PrimitiveInteger.parsePrimitive(x, json._numFN?.[i]));
    }
    if (json.precision !== undefined) {
      newInstance.precision = json.precision.map((x, i) => PrimitiveDecimal.parsePrimitive(x, json._precision?.[i]));
    }
    if (json.sensitivity !== undefined) {
      newInstance.sensitivity = json.sensitivity.map((x, i) => PrimitiveDecimal.parsePrimitive(x, json._sensitivity?.[i]));
    }
    if (json.fMeasure !== undefined) {
      newInstance.fMeasure = json.fMeasure.map((x, i) => PrimitiveDecimal.parsePrimitive(x, json._fMeasure?.[i]));
    }
    return newInstance;
  }

  public static isMolecularSequenceQualityRoc(input?: unknown): input is MolecularSequenceQualityRoc {
    const castInput = input as MolecularSequenceQualityRoc;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MolecularSequenceQualityRoc";
  }

  public toJSON(): IMolecularSequenceQualityRoc {
    const result: IMolecularSequenceQualityRoc = super.toJSON();

    if (this.score) {
      result.score = this.score.filter(x => !!x).map(x => x.value) as typeof result.score;
      result._score = Extension.serializePrimitiveExtensionArray(this.score);
    }

    if (this.numTP) {
      result.numTP = this.numTP.filter(x => !!x).map(x => x.value) as typeof result.numTP;
      result._numTP = Extension.serializePrimitiveExtensionArray(this.numTP);
    }

    if (this.numFP) {
      result.numFP = this.numFP.filter(x => !!x).map(x => x.value) as typeof result.numFP;
      result._numFP = Extension.serializePrimitiveExtensionArray(this.numFP);
    }

    if (this.numFN) {
      result.numFN = this.numFN.filter(x => !!x).map(x => x.value) as typeof result.numFN;
      result._numFN = Extension.serializePrimitiveExtensionArray(this.numFN);
    }

    if (this.precision) {
      result.precision = this.precision.filter(x => !!x).map(x => x.value) as typeof result.precision;
      result._precision = Extension.serializePrimitiveExtensionArray(this.precision);
    }

    if (this.sensitivity) {
      result.sensitivity = this.sensitivity.filter(x => !!x).map(x => x.value) as typeof result.sensitivity;
      result._sensitivity = Extension.serializePrimitiveExtensionArray(this.sensitivity);
    }

    if (this.fMeasure) {
      result.fMeasure = this.fMeasure.filter(x => !!x).map(x => x.value) as typeof result.fMeasure;
      result._fMeasure = Extension.serializePrimitiveExtensionArray(this.fMeasure);
    }

    return result;
  }

  public clone(): MolecularSequenceQualityRoc {
    return MolecularSequenceQualityRoc.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MolecularSequenceQualityRoc";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

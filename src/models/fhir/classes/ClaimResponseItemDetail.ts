/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ClaimResponseItemAdjudication,
  ClaimResponseItemDetailSubDetail,
  Extension,
  FhirField,
  FhirList,
  IClaimResponseItemDetail,
  PrimitivePositiveInt,
  FhirType
} from "../internal";

@FhirType("ClaimResponseItemDetail", "BackboneElement")
export class ClaimResponseItemDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.Item.Detail";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public detailSequence?: PrimitivePositiveInt;

  @FhirList("PrimitivePositiveInt")
  public noteNumber?: Array<PrimitivePositiveInt>;

  @FhirList("ClaimResponseItemAdjudication")
  public adjudication?: Array<ClaimResponseItemAdjudication>;

  @FhirList("ClaimResponseItemDetailSubDetail")
  public subDetail?: Array<ClaimResponseItemDetailSubDetail>;

  public static parse(
    json: IClaimResponseItemDetail,
    providedInstance: ClaimResponseItemDetail = new ClaimResponseItemDetail()
  ): ClaimResponseItemDetail {
    const newInstance: ClaimResponseItemDetail = BackboneElement.parse(json, providedInstance);
  
    if (json.detailSequence !== undefined) {
      newInstance.detailSequence = PrimitivePositiveInt.parsePrimitive(json.detailSequence, json._detailSequence);
    }
    if (json.noteNumber !== undefined) {
      newInstance.noteNumber = json.noteNumber.map((x, i) => PrimitivePositiveInt.parsePrimitive(x, json._noteNumber?.[i]));
    }
    if (json.adjudication !== undefined) {
      newInstance.adjudication = json.adjudication.map((x) => ClaimResponseItemAdjudication.parse(x));
    }
    if (json.subDetail !== undefined) {
      newInstance.subDetail = json.subDetail.map((x) => ClaimResponseItemDetailSubDetail.parse(x));
    }
    return newInstance;
  }

  public static isClaimResponseItemDetail(input?: unknown): input is ClaimResponseItemDetail {
    const castInput = input as ClaimResponseItemDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseItemDetail";
  }

  public toJSON(): IClaimResponseItemDetail {
    const result: IClaimResponseItemDetail = super.toJSON();

    if (this.detailSequence) {
      result.detailSequence = this.detailSequence.value;
      result._detailSequence = Extension.serializePrimitiveExtension(this.detailSequence);
    }

    if (this.noteNumber) {
      result.noteNumber = this.noteNumber.filter(x => !!x).map(x => x.value) as typeof result.noteNumber;
      result._noteNumber = Extension.serializePrimitiveExtensionArray(this.noteNumber);
    }

    if (this.adjudication) {
      result.adjudication = this.adjudication.map((x) => x.toJSON());
    }

    if (this.subDetail) {
      result.subDetail = this.subDetail.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ClaimResponseItemDetail {
    return ClaimResponseItemDetail.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimResponseItemDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

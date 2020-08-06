/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ClaimResponseItemAdjudication,
  ClaimResponseItemDetailSubDetail,
  Extension,
  IClaimResponseItemDetail,
  PrimitivePositiveInt,
} from "../internal";

export class ClaimResponseItemDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.Item.Detail";

  public detailSequence?: PrimitivePositiveInt;

  public noteNumber?: Array<PrimitivePositiveInt>;

  public adjudication?: Array<ClaimResponseItemAdjudication>;

  public subDetail?: Array<ClaimResponseItemDetailSubDetail>;

  public static parse(
    json: IClaimResponseItemDetail,
    providedInstance: ClaimResponseItemDetail = new ClaimResponseItemDetail()
  ): ClaimResponseItemDetail {
    const newInstance: ClaimResponseItemDetail = BackboneElement.parse(json, providedInstance);
  
    if (json.detailSequence) {
      newInstance.detailSequence = PrimitivePositiveInt.parsePrimitive(json.detailSequence, json._detailSequence);
    }
    if (json.noteNumber) {
      newInstance.noteNumber = json.noteNumber.map((x, i) => {
        const ext = json._noteNumber && json._noteNumber[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.adjudication) {
      newInstance.adjudication = json.adjudication.map((x) => ClaimResponseItemAdjudication.parse(x));
    }
    if (json.subDetail) {
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
  
  public getTypeName(): string {
    return "ClaimResponseItemDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ClaimResponseItemAdjudication,
  ClaimResponseItemDetail,
  Extension,
  IClaimResponseItem,
  PrimitivePositiveInt,
} from "../internal";

export class ClaimResponseItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.Item";

  public itemSequence?: PrimitivePositiveInt;

  public noteNumber?: Array<PrimitivePositiveInt>;

  public adjudication?: Array<ClaimResponseItemAdjudication>;

  public detail?: Array<ClaimResponseItemDetail>;

  public static parse(
    json: IClaimResponseItem,
    providedInstance: ClaimResponseItem = new ClaimResponseItem()
  ): ClaimResponseItem {
    const newInstance: ClaimResponseItem = BackboneElement.parse(json, providedInstance);
  
    if (json.itemSequence) {
      newInstance.itemSequence = PrimitivePositiveInt.parsePrimitive(json.itemSequence, json._itemSequence);
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
    if (json.detail) {
      newInstance.detail = json.detail.map((x) => ClaimResponseItemDetail.parse(x));
    }
    return newInstance;
  }

  public static isClaimResponseItem(input?: unknown): input is ClaimResponseItem {
    const castInput = input as ClaimResponseItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseItem";
  }

  public toJSON(): IClaimResponseItem {
    const result: IClaimResponseItem = super.toJSON();

    if (this.itemSequence) {
      result.itemSequence = this.itemSequence.value;
      result._itemSequence = Extension.serializePrimitiveExtension(this.itemSequence);
    }

    if (this.noteNumber) {
      result.noteNumber = this.noteNumber.filter(x => !!x).map(x => x.value) as typeof result.noteNumber;
      result._noteNumber = Extension.serializePrimitiveExtensionArray(this.noteNumber);
    }

    if (this.adjudication) {
      result.adjudication = this.adjudication.map((x) => x.toJSON());
    }

    if (this.detail) {
      result.detail = this.detail.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ClaimResponseItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

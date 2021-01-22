/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ClaimResponseItemAdjudication,
  ClaimResponseItemDetail,
  Extension,
  FhirField,
  FhirList,
  IClaimResponseItem,
  PrimitivePositiveInt,
  FhirType
} from "../internal";

@FhirType("ClaimResponseItem", "BackboneElement")
export class ClaimResponseItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.Item";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public itemSequence?: PrimitivePositiveInt;

  @FhirList("PrimitivePositiveInt")
  public noteNumber?: Array<PrimitivePositiveInt>;

  @FhirList("ClaimResponseItemAdjudication")
  public adjudication?: Array<ClaimResponseItemAdjudication>;

  @FhirList("ClaimResponseItemDetail")
  public detail?: Array<ClaimResponseItemDetail>;

  public static parse(
    json: IClaimResponseItem,
    providedInstance: ClaimResponseItem = new ClaimResponseItem()
  ): ClaimResponseItem {
    const newInstance: ClaimResponseItem = BackboneElement.parse(json, providedInstance);
  
    if (json.itemSequence !== undefined) {
      newInstance.itemSequence = PrimitivePositiveInt.parsePrimitive(json.itemSequence, json._itemSequence);
    }
    if (json.noteNumber !== undefined) {
      newInstance.noteNumber = json.noteNumber.map((x, i) => PrimitivePositiveInt.parsePrimitive(x, json._noteNumber?.[i]));
    }
    if (json.adjudication !== undefined) {
      newInstance.adjudication = json.adjudication.map((x) => ClaimResponseItemAdjudication.parse(x));
    }
    if (json.detail !== undefined) {
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

  public clone(): ClaimResponseItem {
    return ClaimResponseItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimResponseItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

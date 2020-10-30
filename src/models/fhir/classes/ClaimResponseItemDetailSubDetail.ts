/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ClaimResponseItemAdjudication,
  Extension,
  IClaimResponseItemDetailSubDetail,
  PrimitivePositiveInt,
  FieldMetadata
} from "../internal";

export class ClaimResponseItemDetailSubDetail extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.Item.Detail.SubDetail";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "subDetailSequence",
      fieldType: [PrimitivePositiveInt],
      isArray: false
    }, {
      fieldName: "noteNumber",
      fieldType: [PrimitivePositiveInt],
      isArray: true
    }, {
      fieldName: "adjudication",
      fieldType: [ClaimResponseItemAdjudication],
      isArray: true
    }];
  }

  public subDetailSequence?: PrimitivePositiveInt;

  public noteNumber?: Array<PrimitivePositiveInt>;

  public adjudication?: Array<ClaimResponseItemAdjudication>;

  public static parse(
    json: IClaimResponseItemDetailSubDetail,
    providedInstance: ClaimResponseItemDetailSubDetail = new ClaimResponseItemDetailSubDetail()
  ): ClaimResponseItemDetailSubDetail {
    const newInstance: ClaimResponseItemDetailSubDetail = BackboneElement.parse(json, providedInstance);
  
    if (json.subDetailSequence !== undefined) {
      newInstance.subDetailSequence = PrimitivePositiveInt.parsePrimitive(json.subDetailSequence, json._subDetailSequence);
    }
    if (json.noteNumber !== undefined) {
      newInstance.noteNumber = json.noteNumber.map((x, i) => {
        const ext = json._noteNumber && json._noteNumber[i];
        return PrimitivePositiveInt.parsePrimitive(x, ext);
      });
    }
    if (json.adjudication !== undefined) {
      newInstance.adjudication = json.adjudication.map((x) => ClaimResponseItemAdjudication.parse(x));
    }
    return newInstance;
  }

  public static isClaimResponseItemDetailSubDetail(input?: unknown): input is ClaimResponseItemDetailSubDetail {
    const castInput = input as ClaimResponseItemDetailSubDetail;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseItemDetailSubDetail";
  }

  public toJSON(): IClaimResponseItemDetailSubDetail {
    const result: IClaimResponseItemDetailSubDetail = super.toJSON();

    if (this.subDetailSequence) {
      result.subDetailSequence = this.subDetailSequence.value;
      result._subDetailSequence = Extension.serializePrimitiveExtension(this.subDetailSequence);
    }

    if (this.noteNumber) {
      result.noteNumber = this.noteNumber.filter(x => !!x).map(x => x.value) as typeof result.noteNumber;
      result._noteNumber = Extension.serializePrimitiveExtensionArray(this.noteNumber);
    }

    if (this.adjudication) {
      result.adjudication = this.adjudication.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ClaimResponseItemDetailSubDetail {
    return ClaimResponseItemDetailSubDetail.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimResponseItemDetailSubDetail";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

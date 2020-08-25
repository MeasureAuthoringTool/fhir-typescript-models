/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Coding,
  ContractTermAssetContext,
  ContractTermAssetValuedItem,
  ContractTermOfferAnswer,
  Extension,
  IContractTermAsset,
  Period,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
} from "../internal";

export class ContractTermAsset extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.Asset";

  public scope?: CodeableConcept;

  public type?: Array<CodeableConcept>;

  public typeReference?: Array<Reference>;

  public subtype?: Array<CodeableConcept>;

  public relationship?: Coding;

  public context?: Array<ContractTermAssetContext>;

  public condition?: PrimitiveString;

  public periodType?: Array<CodeableConcept>;

  public period?: Array<Period>;

  public usePeriod?: Array<Period>;

  public text?: PrimitiveString;

  public linkId?: Array<PrimitiveString>;

  public answer?: Array<ContractTermOfferAnswer>;

  public securityLabelNumber?: Array<PrimitiveUnsignedInt>;

  public valuedItem?: Array<ContractTermAssetValuedItem>;

  public static parse(
    json: IContractTermAsset,
    providedInstance: ContractTermAsset = new ContractTermAsset()
  ): ContractTermAsset {
    const newInstance: ContractTermAsset = BackboneElement.parse(json, providedInstance);
  
    if (json.scope) {
      newInstance.scope = CodeableConcept.parse(json.scope);
    }
    if (json.type) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.typeReference) {
      newInstance.typeReference = json.typeReference.map((x) => Reference.parse(x));
    }
    if (json.subtype) {
      newInstance.subtype = json.subtype.map((x) => CodeableConcept.parse(x));
    }
    if (json.relationship) {
      newInstance.relationship = Coding.parse(json.relationship);
    }
    if (json.context) {
      newInstance.context = json.context.map((x) => ContractTermAssetContext.parse(x));
    }
    if (json.condition) {
      newInstance.condition = PrimitiveString.parsePrimitive(json.condition, json._condition);
    }
    if (json.periodType) {
      newInstance.periodType = json.periodType.map((x) => CodeableConcept.parse(x));
    }
    if (json.period) {
      newInstance.period = json.period.map((x) => Period.parse(x));
    }
    if (json.usePeriod) {
      newInstance.usePeriod = json.usePeriod.map((x) => Period.parse(x));
    }
    if (json.text) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.linkId) {
      newInstance.linkId = json.linkId.map((x, i) => {
        const ext = json._linkId && json._linkId[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.answer) {
      newInstance.answer = json.answer.map((x) => ContractTermOfferAnswer.parse(x));
    }
    if (json.securityLabelNumber) {
      newInstance.securityLabelNumber = json.securityLabelNumber.map((x, i) => {
        const ext = json._securityLabelNumber && json._securityLabelNumber[i];
        return PrimitiveUnsignedInt.parsePrimitive(x, ext);
      });
    }
    if (json.valuedItem) {
      newInstance.valuedItem = json.valuedItem.map((x) => ContractTermAssetValuedItem.parse(x));
    }
    return newInstance;
  }

  public static isContractTermAsset(input?: unknown): input is ContractTermAsset {
    const castInput = input as ContractTermAsset;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractTermAsset";
  }

  public toJSON(): IContractTermAsset {
    const result: IContractTermAsset = super.toJSON();

    if (this.scope) {
      result.scope = this.scope.toJSON();
    }

    if (this.type) {
      result.type = this.type.map((x) => x.toJSON());
    }

    if (this.typeReference) {
      result.typeReference = this.typeReference.map((x) => x.toJSON());
    }

    if (this.subtype) {
      result.subtype = this.subtype.map((x) => x.toJSON());
    }

    if (this.relationship) {
      result.relationship = this.relationship.toJSON();
    }

    if (this.context) {
      result.context = this.context.map((x) => x.toJSON());
    }

    if (this.condition) {
      result.condition = this.condition.value;
      result._condition = Extension.serializePrimitiveExtension(this.condition);
    }

    if (this.periodType) {
      result.periodType = this.periodType.map((x) => x.toJSON());
    }

    if (this.period) {
      result.period = this.period.map((x) => x.toJSON());
    }

    if (this.usePeriod) {
      result.usePeriod = this.usePeriod.map((x) => x.toJSON());
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    if (this.linkId) {
      result.linkId = this.linkId.filter(x => !!x).map(x => x.value) as typeof result.linkId;
      result._linkId = Extension.serializePrimitiveExtensionArray(this.linkId);
    }

    if (this.answer) {
      result.answer = this.answer.map((x) => x.toJSON());
    }

    if (this.securityLabelNumber) {
      result.securityLabelNumber = this.securityLabelNumber.filter(x => !!x).map(x => x.value) as typeof result.securityLabelNumber;
      result._securityLabelNumber = Extension.serializePrimitiveExtensionArray(this.securityLabelNumber);
    }

    if (this.valuedItem) {
      result.valuedItem = this.valuedItem.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ContractTermAsset";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

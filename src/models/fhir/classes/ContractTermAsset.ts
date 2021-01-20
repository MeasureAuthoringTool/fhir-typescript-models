/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Coding,
  ContractTermAssetContext,
  ContractTermAssetValuedItem,
  ContractTermOfferAnswer,
  Extension,
  FhirField,
  FhirList,
  IContractTermAsset,
  Period,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("ContractTermAsset", "BackboneElement")
export class ContractTermAsset extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.Asset";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public scope?: CodeableConcept;

  @FhirList("CodeableConcept")
  public type?: Array<CodeableConcept>;

  @FhirList("Reference")
  public typeReference?: Array<Reference>;

  @FhirList("CodeableConcept")
  public subtype?: Array<CodeableConcept>;

  @FhirField("Coding")
  public relationship?: Coding;

  @FhirList("ContractTermAssetContext")
  public context?: Array<ContractTermAssetContext>;

  @FhirField("PrimitiveString")
  public condition?: PrimitiveString;

  @FhirList("CodeableConcept")
  public periodType?: Array<CodeableConcept>;

  @FhirList("Period")
  public period?: Array<Period>;

  @FhirList("Period")
  public usePeriod?: Array<Period>;

  @FhirField("PrimitiveString")
  public text?: PrimitiveString;

  @FhirList("PrimitiveString")
  public linkId?: Array<PrimitiveString>;

  @FhirList("ContractTermOfferAnswer")
  public answer?: Array<ContractTermOfferAnswer>;

  @FhirList("PrimitiveUnsignedInt")
  public securityLabelNumber?: Array<PrimitiveUnsignedInt>;

  @FhirList("ContractTermAssetValuedItem")
  public valuedItem?: Array<ContractTermAssetValuedItem>;

  public static parse(
    json: IContractTermAsset,
    providedInstance: ContractTermAsset = new ContractTermAsset()
  ): ContractTermAsset {
    const newInstance: ContractTermAsset = BackboneElement.parse(json, providedInstance);
  
    if (json.scope !== undefined) {
      newInstance.scope = CodeableConcept.parse(json.scope);
    }
    if (json.type !== undefined) {
      newInstance.type = json.type.map((x) => CodeableConcept.parse(x));
    }
    if (json.typeReference !== undefined) {
      newInstance.typeReference = json.typeReference.map((x) => Reference.parse(x));
    }
    if (json.subtype !== undefined) {
      newInstance.subtype = json.subtype.map((x) => CodeableConcept.parse(x));
    }
    if (json.relationship !== undefined) {
      newInstance.relationship = Coding.parse(json.relationship);
    }
    if (json.context !== undefined) {
      newInstance.context = json.context.map((x) => ContractTermAssetContext.parse(x));
    }
    if (json.condition !== undefined) {
      newInstance.condition = PrimitiveString.parsePrimitive(json.condition, json._condition);
    }
    if (json.periodType !== undefined) {
      newInstance.periodType = json.periodType.map((x) => CodeableConcept.parse(x));
    }
    if (json.period !== undefined) {
      newInstance.period = json.period.map((x) => Period.parse(x));
    }
    if (json.usePeriod !== undefined) {
      newInstance.usePeriod = json.usePeriod.map((x) => Period.parse(x));
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.linkId !== undefined) {
      newInstance.linkId = json.linkId.map((x, i) => PrimitiveString.parsePrimitive(x, json._linkId?.[i]));
    }
    if (json.answer !== undefined) {
      newInstance.answer = json.answer.map((x) => ContractTermOfferAnswer.parse(x));
    }
    if (json.securityLabelNumber !== undefined) {
      newInstance.securityLabelNumber = json.securityLabelNumber.map((x, i) => PrimitiveUnsignedInt.parsePrimitive(x, json._securityLabelNumber?.[i]));
    }
    if (json.valuedItem !== undefined) {
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

  public clone(): ContractTermAsset {
    return ContractTermAsset.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractTermAsset";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

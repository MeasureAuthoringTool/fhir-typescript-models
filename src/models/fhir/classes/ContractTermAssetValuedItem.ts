/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IContractTermAssetValuedItem,
  Identifier,
  Money,
  PrimitiveDateTime,
  PrimitiveDecimal,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("ContractTermAssetValuedItem", "BackboneElement")
export class ContractTermAssetValuedItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.Asset.ValuedItem";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("CodeableConcept", "Reference")
  public entity?: CodeableConcept | Reference;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("PrimitiveDateTime")
  public effectiveTime?: PrimitiveDateTime;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirField("Money")
  public unitPrice?: Money;

  @FhirField("PrimitiveDecimal")
  public factor?: PrimitiveDecimal;

  @FhirField("PrimitiveDecimal")
  public points?: PrimitiveDecimal;

  @FhirField("Money")
  public net?: Money;

  @FhirField("PrimitiveString")
  public payment?: PrimitiveString;

  @FhirField("PrimitiveDateTime")
  public paymentDate?: PrimitiveDateTime;

  @FhirField("Reference")
  public responsible?: Reference;

  @FhirField("Reference")
  public recipient?: Reference;

  @FhirList("PrimitiveString")
  public linkId?: Array<PrimitiveString>;

  @FhirList("PrimitiveUnsignedInt")
  public securityLabelNumber?: Array<PrimitiveUnsignedInt>;

  public static parse(
    json: IContractTermAssetValuedItem,
    providedInstance: ContractTermAssetValuedItem = new ContractTermAssetValuedItem()
  ): ContractTermAssetValuedItem {
    const newInstance: ContractTermAssetValuedItem = BackboneElement.parse(json, providedInstance);
  
    if (json.entityCodeableConcept !== undefined) {
      newInstance.entity = CodeableConcept.parse(json.entityCodeableConcept);
    }
    if (json.entityReference !== undefined) {
      newInstance.entity = Reference.parse(json.entityReference);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.effectiveTime !== undefined) {
      newInstance.effectiveTime = PrimitiveDateTime.parsePrimitive(json.effectiveTime, json._effectiveTime);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.unitPrice !== undefined) {
      newInstance.unitPrice = Money.parse(json.unitPrice);
    }
    if (json.factor !== undefined) {
      newInstance.factor = PrimitiveDecimal.parsePrimitive(json.factor, json._factor);
    }
    if (json.points !== undefined) {
      newInstance.points = PrimitiveDecimal.parsePrimitive(json.points, json._points);
    }
    if (json.net !== undefined) {
      newInstance.net = Money.parse(json.net);
    }
    if (json.payment !== undefined) {
      newInstance.payment = PrimitiveString.parsePrimitive(json.payment, json._payment);
    }
    if (json.paymentDate !== undefined) {
      newInstance.paymentDate = PrimitiveDateTime.parsePrimitive(json.paymentDate, json._paymentDate);
    }
    if (json.responsible !== undefined) {
      newInstance.responsible = Reference.parse(json.responsible);
    }
    if (json.recipient !== undefined) {
      newInstance.recipient = Reference.parse(json.recipient);
    }
    if (json.linkId !== undefined) {
      newInstance.linkId = json.linkId.map((x, i) => PrimitiveString.parsePrimitive(x, json._linkId?.[i]));
    }
    if (json.securityLabelNumber !== undefined) {
      newInstance.securityLabelNumber = json.securityLabelNumber.map((x, i) => PrimitiveUnsignedInt.parsePrimitive(x, json._securityLabelNumber?.[i]));
    }
    return newInstance;
  }

  public static isContractTermAssetValuedItem(input?: unknown): input is ContractTermAssetValuedItem {
    const castInput = input as ContractTermAssetValuedItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractTermAssetValuedItem";
  }

  public toJSON(): IContractTermAssetValuedItem {
    const result: IContractTermAssetValuedItem = super.toJSON();

    if (this.entity && CodeableConcept.isCodeableConcept(this.entity)) {
      result.entityCodeableConcept = this.entity.toJSON();
    }

    if (this.entity && Reference.isReference(this.entity)) {
      result.entityReference = this.entity.toJSON();
    }

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.effectiveTime) {
      result.effectiveTime = this.effectiveTime.value;
      result._effectiveTime = Extension.serializePrimitiveExtension(this.effectiveTime);
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.unitPrice) {
      result.unitPrice = this.unitPrice.toJSON();
    }

    if (this.factor) {
      result.factor = this.factor.value;
      result._factor = Extension.serializePrimitiveExtension(this.factor);
    }

    if (this.points) {
      result.points = this.points.value;
      result._points = Extension.serializePrimitiveExtension(this.points);
    }

    if (this.net) {
      result.net = this.net.toJSON();
    }

    if (this.payment) {
      result.payment = this.payment.value;
      result._payment = Extension.serializePrimitiveExtension(this.payment);
    }

    if (this.paymentDate) {
      result.paymentDate = this.paymentDate.value;
      result._paymentDate = Extension.serializePrimitiveExtension(this.paymentDate);
    }

    if (this.responsible) {
      result.responsible = this.responsible.toJSON();
    }

    if (this.recipient) {
      result.recipient = this.recipient.toJSON();
    }

    if (this.linkId) {
      result.linkId = this.linkId.filter(x => !!x).map(x => x.value) as typeof result.linkId;
      result._linkId = Extension.serializePrimitiveExtensionArray(this.linkId);
    }

    if (this.securityLabelNumber) {
      result.securityLabelNumber = this.securityLabelNumber.filter(x => !!x).map(x => x.value) as typeof result.securityLabelNumber;
      result._securityLabelNumber = Extension.serializePrimitiveExtensionArray(this.securityLabelNumber);
    }

    return result;
  }

  public clone(): ContractTermAssetValuedItem {
    return ContractTermAssetValuedItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractTermAssetValuedItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

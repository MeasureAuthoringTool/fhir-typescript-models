/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  ContractTermOfferAnswer,
  ContractTermOfferParty,
  Extension,
  FhirField,
  FhirList,
  IContractTermOffer,
  Identifier,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("ContractTermOffer", "BackboneElement")
export class ContractTermOffer extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.Offer";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirList("ContractTermOfferParty")
  public party?: Array<ContractTermOfferParty>;

  @FhirField("Reference")
  public topic?: Reference;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public decision?: CodeableConcept;

  @FhirList("CodeableConcept")
  public decisionMode?: Array<CodeableConcept>;

  @FhirList("ContractTermOfferAnswer")
  public answer?: Array<ContractTermOfferAnswer>;

  @FhirField("PrimitiveString")
  public text?: PrimitiveString;

  @FhirList("PrimitiveString")
  public linkId?: Array<PrimitiveString>;

  @FhirList("PrimitiveUnsignedInt")
  public securityLabelNumber?: Array<PrimitiveUnsignedInt>;

  public static parse(
    json: IContractTermOffer,
    providedInstance: ContractTermOffer = new ContractTermOffer()
  ): ContractTermOffer {
    const newInstance: ContractTermOffer = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.party !== undefined) {
      newInstance.party = json.party.map((x) => ContractTermOfferParty.parse(x));
    }
    if (json.topic !== undefined) {
      newInstance.topic = Reference.parse(json.topic);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.decision !== undefined) {
      newInstance.decision = CodeableConcept.parse(json.decision);
    }
    if (json.decisionMode !== undefined) {
      newInstance.decisionMode = json.decisionMode.map((x) => CodeableConcept.parse(x));
    }
    if (json.answer !== undefined) {
      newInstance.answer = json.answer.map((x) => ContractTermOfferAnswer.parse(x));
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.linkId !== undefined) {
      newInstance.linkId = json.linkId.map((x, i) => PrimitiveString.parsePrimitive(x, json._linkId?.[i]));
    }
    if (json.securityLabelNumber !== undefined) {
      newInstance.securityLabelNumber = json.securityLabelNumber.map((x, i) => PrimitiveUnsignedInt.parsePrimitive(x, json._securityLabelNumber?.[i]));
    }
    return newInstance;
  }

  public static isContractTermOffer(input?: unknown): input is ContractTermOffer {
    const castInput = input as ContractTermOffer;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractTermOffer";
  }

  public toJSON(): IContractTermOffer {
    const result: IContractTermOffer = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.party) {
      result.party = this.party.map((x) => x.toJSON());
    }

    if (this.topic) {
      result.topic = this.topic.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.decision) {
      result.decision = this.decision.toJSON();
    }

    if (this.decisionMode) {
      result.decisionMode = this.decisionMode.map((x) => x.toJSON());
    }

    if (this.answer) {
      result.answer = this.answer.map((x) => x.toJSON());
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
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

  public clone(): ContractTermOffer {
    return ContractTermOffer.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractTermOffer";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  ContractTermAction,
  ContractTermAsset,
  ContractTermOffer,
  ContractTermSecurityLabel,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IContractTerm,
  Identifier,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("ContractTerm", "BackboneElement")
export class ContractTerm extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("PrimitiveDateTime")
  public issued?: PrimitiveDateTime;

  @FhirField("Period")
  public applies?: Period;

  @FhirChoice("CodeableConcept", "Reference")
  public topic?: CodeableConcept | Reference;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public subType?: CodeableConcept;

  @FhirField("PrimitiveString")
  public text?: PrimitiveString;

  @FhirList("ContractTermSecurityLabel")
  public securityLabel?: Array<ContractTermSecurityLabel>;

  @FhirField("ContractTermOffer")
  public offer?: ContractTermOffer;

  @FhirList("ContractTermAsset")
  public asset?: Array<ContractTermAsset>;

  @FhirList("ContractTermAction")
  public action?: Array<ContractTermAction>;

  @FhirList("ContractTerm")
  public group?: Array<ContractTerm>;

  public static parse(
    json: IContractTerm,
    providedInstance: ContractTerm = new ContractTerm()
  ): ContractTerm {
    const newInstance: ContractTerm = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.issued !== undefined) {
      newInstance.issued = PrimitiveDateTime.parsePrimitive(json.issued, json._issued);
    }
    if (json.applies !== undefined) {
      newInstance.applies = Period.parse(json.applies);
    }
    if (json.topicCodeableConcept !== undefined) {
      newInstance.topic = CodeableConcept.parse(json.topicCodeableConcept);
    }
    if (json.topicReference !== undefined) {
      newInstance.topic = Reference.parse(json.topicReference);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subType !== undefined) {
      newInstance.subType = CodeableConcept.parse(json.subType);
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveString.parsePrimitive(json.text, json._text);
    }
    if (json.securityLabel !== undefined) {
      newInstance.securityLabel = json.securityLabel.map((x) => ContractTermSecurityLabel.parse(x));
    }
    if (json.offer !== undefined) {
      newInstance.offer = ContractTermOffer.parse(json.offer);
    }
    if (json.asset !== undefined) {
      newInstance.asset = json.asset.map((x) => ContractTermAsset.parse(x));
    }
    if (json.action !== undefined) {
      newInstance.action = json.action.map((x) => ContractTermAction.parse(x));
    }
    if (json.group !== undefined) {
      newInstance.group = json.group.map((x) => ContractTerm.parse(x));
    }
    return newInstance;
  }

  public static isContractTerm(input?: unknown): input is ContractTerm {
    const castInput = input as ContractTerm;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractTerm";
  }

  public toJSON(): IContractTerm {
    const result: IContractTerm = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.issued) {
      result.issued = this.issued.value;
      result._issued = Extension.serializePrimitiveExtension(this.issued);
    }

    if (this.applies) {
      result.applies = this.applies.toJSON();
    }

    if (this.topic && CodeableConcept.isCodeableConcept(this.topic)) {
      result.topicCodeableConcept = this.topic.toJSON();
    }

    if (this.topic && Reference.isReference(this.topic)) {
      result.topicReference = this.topic.toJSON();
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.subType) {
      result.subType = this.subType.toJSON();
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    if (this.securityLabel) {
      result.securityLabel = this.securityLabel.map((x) => x.toJSON());
    }

    if (this.offer) {
      result.offer = this.offer.toJSON();
    }

    if (this.asset) {
      result.asset = this.asset.map((x) => x.toJSON());
    }

    if (this.action) {
      result.action = this.action.map((x) => x.toJSON());
    }

    if (this.group) {
      result.group = this.group.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ContractTerm {
    return ContractTerm.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractTerm";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

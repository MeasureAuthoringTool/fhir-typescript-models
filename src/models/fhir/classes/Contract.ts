/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  CodeableConcept,
  ContractContentDefinition,
  ContractFriendly,
  ContractLegal,
  ContractRule,
  ContractSigner,
  ContractStatus,
  ContractTerm,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IContract,
  Identifier,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  FhirType
} from "../internal";

@FhirType("Contract", "DomainResource")
export class Contract extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveUri")
  public url?: PrimitiveUri;

  @FhirField("PrimitiveString")
  public version?: PrimitiveString;

  @FhirField("ContractStatus")
  public status?: ContractStatus;

  @FhirField("CodeableConcept")
  public legalState?: CodeableConcept;

  @FhirField("Reference")
  public instantiatesCanonical?: Reference;

  @FhirField("PrimitiveUri")
  public instantiatesUri?: PrimitiveUri;

  @FhirField("CodeableConcept")
  public contentDerivative?: CodeableConcept;

  @FhirField("PrimitiveDateTime")
  public issued?: PrimitiveDateTime;

  @FhirField("Period")
  public applies?: Period;

  @FhirField("CodeableConcept")
  public expirationType?: CodeableConcept;

  @FhirList("Reference")
  public subject?: Array<Reference>;

  @FhirList("Reference")
  public authority?: Array<Reference>;

  @FhirList("Reference")
  public domain?: Array<Reference>;

  @FhirList("Reference")
  public site?: Array<Reference>;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public title?: PrimitiveString;

  @FhirField("PrimitiveString")
  public subtitle?: PrimitiveString;

  @FhirList("PrimitiveString")
  public alias?: Array<PrimitiveString>;

  @FhirField("Reference")
  public author?: Reference;

  @FhirField("CodeableConcept")
  public scope?: CodeableConcept;

  @FhirChoice("CodeableConcept", "Reference")
  public topic?: CodeableConcept | Reference;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("CodeableConcept")
  public subType?: Array<CodeableConcept>;

  @FhirField("ContractContentDefinition")
  public contentDefinition?: ContractContentDefinition;

  @FhirList("ContractTerm")
  public term?: Array<ContractTerm>;

  @FhirList("Reference")
  public supportingInfo?: Array<Reference>;

  @FhirList("Reference")
  public relevantHistory?: Array<Reference>;

  @FhirList("ContractSigner")
  public signer?: Array<ContractSigner>;

  @FhirList("ContractFriendly")
  public friendly?: Array<ContractFriendly>;

  @FhirList("ContractLegal")
  public legal?: Array<ContractLegal>;

  @FhirList("ContractRule")
  public rule?: Array<ContractRule>;

  @FhirChoice("Attachment", "Reference")
  public legallyBinding?: Attachment | Reference;

  public static parse(
    json: IContract,
    providedInstance: Contract = new Contract()
  ): Contract {
    const newInstance: Contract = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.status !== undefined) {
      newInstance.status = ContractStatus.parsePrimitive(json.status, json._status);
    }
    if (json.legalState !== undefined) {
      newInstance.legalState = CodeableConcept.parse(json.legalState);
    }
    if (json.instantiatesCanonical !== undefined) {
      newInstance.instantiatesCanonical = Reference.parse(json.instantiatesCanonical);
    }
    if (json.instantiatesUri !== undefined) {
      newInstance.instantiatesUri = PrimitiveUri.parsePrimitive(json.instantiatesUri, json._instantiatesUri);
    }
    if (json.contentDerivative !== undefined) {
      newInstance.contentDerivative = CodeableConcept.parse(json.contentDerivative);
    }
    if (json.issued !== undefined) {
      newInstance.issued = PrimitiveDateTime.parsePrimitive(json.issued, json._issued);
    }
    if (json.applies !== undefined) {
      newInstance.applies = Period.parse(json.applies);
    }
    if (json.expirationType !== undefined) {
      newInstance.expirationType = CodeableConcept.parse(json.expirationType);
    }
    if (json.subject !== undefined) {
      newInstance.subject = json.subject.map((x) => Reference.parse(x));
    }
    if (json.authority !== undefined) {
      newInstance.authority = json.authority.map((x) => Reference.parse(x));
    }
    if (json.domain !== undefined) {
      newInstance.domain = json.domain.map((x) => Reference.parse(x));
    }
    if (json.site !== undefined) {
      newInstance.site = json.site.map((x) => Reference.parse(x));
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.subtitle !== undefined) {
      newInstance.subtitle = PrimitiveString.parsePrimitive(json.subtitle, json._subtitle);
    }
    if (json.alias !== undefined) {
      newInstance.alias = json.alias.map((x, i) => PrimitiveString.parsePrimitive(x, json._alias?.[i]));
    }
    if (json.author !== undefined) {
      newInstance.author = Reference.parse(json.author);
    }
    if (json.scope !== undefined) {
      newInstance.scope = CodeableConcept.parse(json.scope);
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
      newInstance.subType = json.subType.map((x) => CodeableConcept.parse(x));
    }
    if (json.contentDefinition !== undefined) {
      newInstance.contentDefinition = ContractContentDefinition.parse(json.contentDefinition);
    }
    if (json.term !== undefined) {
      newInstance.term = json.term.map((x) => ContractTerm.parse(x));
    }
    if (json.supportingInfo !== undefined) {
      newInstance.supportingInfo = json.supportingInfo.map((x) => Reference.parse(x));
    }
    if (json.relevantHistory !== undefined) {
      newInstance.relevantHistory = json.relevantHistory.map((x) => Reference.parse(x));
    }
    if (json.signer !== undefined) {
      newInstance.signer = json.signer.map((x) => ContractSigner.parse(x));
    }
    if (json.friendly !== undefined) {
      newInstance.friendly = json.friendly.map((x) => ContractFriendly.parse(x));
    }
    if (json.legal !== undefined) {
      newInstance.legal = json.legal.map((x) => ContractLegal.parse(x));
    }
    if (json.rule !== undefined) {
      newInstance.rule = json.rule.map((x) => ContractRule.parse(x));
    }
    if (json.legallyBindingAttachment !== undefined) {
      newInstance.legallyBinding = Attachment.parse(json.legallyBindingAttachment);
    }
    if (json.legallyBindingReference !== undefined) {
      newInstance.legallyBinding = Reference.parse(json.legallyBindingReference);
    }
    return newInstance;
  }

  public static isContract(input?: unknown): input is Contract {
    const castInput = input as Contract;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Contract";
  }

  public toJSON(): IContract {
    const result: IContract = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.legalState) {
      result.legalState = this.legalState.toJSON();
    }

    if (this.instantiatesCanonical) {
      result.instantiatesCanonical = this.instantiatesCanonical.toJSON();
    }

    if (this.instantiatesUri) {
      result.instantiatesUri = this.instantiatesUri.value;
      result._instantiatesUri = Extension.serializePrimitiveExtension(this.instantiatesUri);
    }

    if (this.contentDerivative) {
      result.contentDerivative = this.contentDerivative.toJSON();
    }

    if (this.issued) {
      result.issued = this.issued.value;
      result._issued = Extension.serializePrimitiveExtension(this.issued);
    }

    if (this.applies) {
      result.applies = this.applies.toJSON();
    }

    if (this.expirationType) {
      result.expirationType = this.expirationType.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.map((x) => x.toJSON());
    }

    if (this.authority) {
      result.authority = this.authority.map((x) => x.toJSON());
    }

    if (this.domain) {
      result.domain = this.domain.map((x) => x.toJSON());
    }

    if (this.site) {
      result.site = this.site.map((x) => x.toJSON());
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    if (this.subtitle) {
      result.subtitle = this.subtitle.value;
      result._subtitle = Extension.serializePrimitiveExtension(this.subtitle);
    }

    if (this.alias) {
      result.alias = this.alias.filter(x => !!x).map(x => x.value) as typeof result.alias;
      result._alias = Extension.serializePrimitiveExtensionArray(this.alias);
    }

    if (this.author) {
      result.author = this.author.toJSON();
    }

    if (this.scope) {
      result.scope = this.scope.toJSON();
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
      result.subType = this.subType.map((x) => x.toJSON());
    }

    if (this.contentDefinition) {
      result.contentDefinition = this.contentDefinition.toJSON();
    }

    if (this.term) {
      result.term = this.term.map((x) => x.toJSON());
    }

    if (this.supportingInfo) {
      result.supportingInfo = this.supportingInfo.map((x) => x.toJSON());
    }

    if (this.relevantHistory) {
      result.relevantHistory = this.relevantHistory.map((x) => x.toJSON());
    }

    if (this.signer) {
      result.signer = this.signer.map((x) => x.toJSON());
    }

    if (this.friendly) {
      result.friendly = this.friendly.map((x) => x.toJSON());
    }

    if (this.legal) {
      result.legal = this.legal.map((x) => x.toJSON());
    }

    if (this.rule) {
      result.rule = this.rule.map((x) => x.toJSON());
    }

    if (this.legallyBinding && Attachment.isAttachment(this.legallyBinding)) {
      result.legallyBindingAttachment = this.legallyBinding.toJSON();
    }

    if (this.legallyBinding && Reference.isReference(this.legallyBinding)) {
      result.legallyBindingReference = this.legallyBinding.toJSON();
    }

    return result;
  }

  public clone(): Contract {
    return Contract.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Contract";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

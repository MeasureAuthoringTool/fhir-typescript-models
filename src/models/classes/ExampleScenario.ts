/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  ContactDetail,
  DomainResource,
  ExampleScenarioActor,
  ExampleScenarioInstance,
  ExampleScenarioProcess,
  Extension,
  Identifier,
  IExampleScenario,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  UsageContext,
} from "../internal";

export class ExampleScenario extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExampleScenario";

  public url?: PrimitiveUri;

  public identifier?: Array<Identifier>;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public status?: PublicationStatus;

  public experimental?: PrimitiveBoolean;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

  public copyright?: PrimitiveMarkdown;

  public purpose?: PrimitiveMarkdown;

  public actor?: Array<ExampleScenarioActor>;

  public instance?: Array<ExampleScenarioInstance>;

  public process?: Array<ExampleScenarioProcess>;

  public workflow?: Array<PrimitiveCanonical>;

  public static parse(
    json: IExampleScenario,
    providedInstance: ExampleScenario = new ExampleScenario()
  ): ExampleScenario {
    const newInstance: ExampleScenario = DomainResource.parse(json, providedInstance);
  
    if (json.url) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.version) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.status) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.experimental) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
    }
    if (json.date) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.publisher) {
      newInstance.publisher = PrimitiveString.parsePrimitive(json.publisher, json._publisher);
    }
    if (json.contact) {
      newInstance.contact = json.contact.map((x) => ContactDetail.parse(x));
    }
    if (json.useContext) {
      newInstance.useContext = json.useContext.map((x) => UsageContext.parse(x));
    }
    if (json.jurisdiction) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.copyright) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    if (json.purpose) {
      newInstance.purpose = PrimitiveMarkdown.parsePrimitive(json.purpose, json._purpose);
    }
    if (json.actor) {
      newInstance.actor = json.actor.map((x) => ExampleScenarioActor.parse(x));
    }
    if (json.instance) {
      newInstance.instance = json.instance.map((x) => ExampleScenarioInstance.parse(x));
    }
    if (json.process) {
      newInstance.process = json.process.map((x) => ExampleScenarioProcess.parse(x));
    }
    if (json.workflow) {
      newInstance.workflow = json.workflow.map((x, i) => {
        const ext = json._workflow && json._workflow[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    return newInstance;
  }

  public static isExampleScenario(input?: unknown): input is ExampleScenario {
    const castInput = input as ExampleScenario;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExampleScenario";
  }

  public toJSON(): IExampleScenario {
    const result: IExampleScenario = super.toJSON();

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.experimental) {
      result.experimental = this.experimental.value;
      result._experimental = Extension.serializePrimitiveExtension(this.experimental);
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.publisher) {
      result.publisher = this.publisher.value;
      result._publisher = Extension.serializePrimitiveExtension(this.publisher);
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.useContext) {
      result.useContext = this.useContext.map((x) => x.toJSON());
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.map((x) => x.toJSON());
    }

    if (this.copyright) {
      result.copyright = this.copyright.value;
      result._copyright = Extension.serializePrimitiveExtension(this.copyright);
    }

    if (this.purpose) {
      result.purpose = this.purpose.value;
      result._purpose = Extension.serializePrimitiveExtension(this.purpose);
    }

    if (this.actor) {
      result.actor = this.actor.map((x) => x.toJSON());
    }

    if (this.instance) {
      result.instance = this.instance.map((x) => x.toJSON());
    }

    if (this.process) {
      result.process = this.process.map((x) => x.toJSON());
    }

    if (this.workflow) {
      result.workflow = this.workflow.filter(x => !!x).map(x => x.value) as typeof result.workflow;
      result._workflow = Extension.serializePrimitiveExtensionArray(this.workflow);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ExampleScenario";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

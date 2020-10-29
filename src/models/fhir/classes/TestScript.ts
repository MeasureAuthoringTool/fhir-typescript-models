/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  ContactDetail,
  DomainResource,
  Extension,
  Identifier,
  ITestScript,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  PrimitiveUri,
  PublicationStatus,
  Reference,
  TestScriptDestination,
  TestScriptFixture,
  TestScriptMetadata,
  TestScriptOrigin,
  TestScriptSetup,
  TestScriptTeardown,
  TestScriptTest,
  TestScriptVariable,
  UsageContext,
  FieldMetadata
} from "../internal";

export class TestScript extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TestScript";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "url",
      fieldType: [PrimitiveUri],
      isArray: false
    }, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: false
    }, {
      fieldName: "version",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "title",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "status",
      fieldType: [PublicationStatus],
      isArray: false
    }, {
      fieldName: "experimental",
      fieldType: [PrimitiveBoolean],
      isArray: false
    }, {
      fieldName: "date",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "publisher",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "contact",
      fieldType: [ContactDetail],
      isArray: true
    }, {
      fieldName: "description",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "useContext",
      fieldType: [UsageContext],
      isArray: true
    }, {
      fieldName: "jurisdiction",
      fieldType: [CodeableConcept],
      isArray: true
    }, {
      fieldName: "purpose",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "copyright",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }, {
      fieldName: "origin",
      fieldType: [TestScriptOrigin],
      isArray: true
    }, {
      fieldName: "destination",
      fieldType: [TestScriptDestination],
      isArray: true
    }, {
      fieldName: "metadata",
      fieldType: [TestScriptMetadata],
      isArray: false
    }, {
      fieldName: "fixture",
      fieldType: [TestScriptFixture],
      isArray: true
    }, {
      fieldName: "profile",
      fieldType: [Reference],
      isArray: true
    }, {
      fieldName: "variable",
      fieldType: [TestScriptVariable],
      isArray: true
    }, {
      fieldName: "setup",
      fieldType: [TestScriptSetup],
      isArray: false
    }, {
      fieldName: "test",
      fieldType: [TestScriptTest],
      isArray: true
    }, {
      fieldName: "teardown",
      fieldType: [TestScriptTeardown],
      isArray: false
    }];
  }

  public url?: PrimitiveUri;

  public identifier?: Identifier;

  public version?: PrimitiveString;

  public name?: PrimitiveString;

  public title?: PrimitiveString;

  public status?: PublicationStatus;

  public experimental?: PrimitiveBoolean;

  public date?: PrimitiveDateTime;

  public publisher?: PrimitiveString;

  public contact?: Array<ContactDetail>;

  public description?: PrimitiveMarkdown;

  public useContext?: Array<UsageContext>;

  public jurisdiction?: Array<CodeableConcept>;

  public purpose?: PrimitiveMarkdown;

  public copyright?: PrimitiveMarkdown;

  public origin?: Array<TestScriptOrigin>;

  public destination?: Array<TestScriptDestination>;

  public metadata?: TestScriptMetadata;

  public fixture?: Array<TestScriptFixture>;

  public profile?: Array<Reference>;

  public variable?: Array<TestScriptVariable>;

  public setup?: TestScriptSetup;

  public test?: Array<TestScriptTest>;

  public teardown?: TestScriptTeardown;

  public static parse(
    json: ITestScript,
    providedInstance: TestScript = new TestScript()
  ): TestScript {
    const newInstance: TestScript = DomainResource.parse(json, providedInstance);
  
    if (json.url !== undefined) {
      newInstance.url = PrimitiveUri.parsePrimitive(json.url, json._url);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.title !== undefined) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    if (json.status !== undefined) {
      newInstance.status = PublicationStatus.parsePrimitive(json.status, json._status);
    }
    if (json.experimental !== undefined) {
      newInstance.experimental = PrimitiveBoolean.parsePrimitive(json.experimental, json._experimental);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.publisher !== undefined) {
      newInstance.publisher = PrimitiveString.parsePrimitive(json.publisher, json._publisher);
    }
    if (json.contact !== undefined) {
      newInstance.contact = json.contact.map((x) => ContactDetail.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveMarkdown.parsePrimitive(json.description, json._description);
    }
    if (json.useContext !== undefined) {
      newInstance.useContext = json.useContext.map((x) => UsageContext.parse(x));
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = json.jurisdiction.map((x) => CodeableConcept.parse(x));
    }
    if (json.purpose !== undefined) {
      newInstance.purpose = PrimitiveMarkdown.parsePrimitive(json.purpose, json._purpose);
    }
    if (json.copyright !== undefined) {
      newInstance.copyright = PrimitiveMarkdown.parsePrimitive(json.copyright, json._copyright);
    }
    if (json.origin !== undefined) {
      newInstance.origin = json.origin.map((x) => TestScriptOrigin.parse(x));
    }
    if (json.destination !== undefined) {
      newInstance.destination = json.destination.map((x) => TestScriptDestination.parse(x));
    }
    if (json.metadata !== undefined) {
      newInstance.metadata = TestScriptMetadata.parse(json.metadata);
    }
    if (json.fixture !== undefined) {
      newInstance.fixture = json.fixture.map((x) => TestScriptFixture.parse(x));
    }
    if (json.profile !== undefined) {
      newInstance.profile = json.profile.map((x) => Reference.parse(x));
    }
    if (json.variable !== undefined) {
      newInstance.variable = json.variable.map((x) => TestScriptVariable.parse(x));
    }
    if (json.setup !== undefined) {
      newInstance.setup = TestScriptSetup.parse(json.setup);
    }
    if (json.test !== undefined) {
      newInstance.test = json.test.map((x) => TestScriptTest.parse(x));
    }
    if (json.teardown !== undefined) {
      newInstance.teardown = TestScriptTeardown.parse(json.teardown);
    }
    return newInstance;
  }

  public static isTestScript(input?: unknown): input is TestScript {
    const castInput = input as TestScript;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TestScript";
  }

  public toJSON(): ITestScript {
    const result: ITestScript = super.toJSON();

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
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

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.useContext) {
      result.useContext = this.useContext.map((x) => x.toJSON());
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.map((x) => x.toJSON());
    }

    if (this.purpose) {
      result.purpose = this.purpose.value;
      result._purpose = Extension.serializePrimitiveExtension(this.purpose);
    }

    if (this.copyright) {
      result.copyright = this.copyright.value;
      result._copyright = Extension.serializePrimitiveExtension(this.copyright);
    }

    if (this.origin) {
      result.origin = this.origin.map((x) => x.toJSON());
    }

    if (this.destination) {
      result.destination = this.destination.map((x) => x.toJSON());
    }

    if (this.metadata) {
      result.metadata = this.metadata.toJSON();
    }

    if (this.fixture) {
      result.fixture = this.fixture.map((x) => x.toJSON());
    }

    if (this.profile) {
      result.profile = this.profile.map((x) => x.toJSON());
    }

    if (this.variable) {
      result.variable = this.variable.map((x) => x.toJSON());
    }

    if (this.setup) {
      result.setup = this.setup.toJSON();
    }

    if (this.test) {
      result.test = this.test.map((x) => x.toJSON());
    }

    if (this.teardown) {
      result.teardown = this.teardown.toJSON();
    }

    return result;
  }

  public clone(): TestScript {
    return TestScript.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TestScript";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

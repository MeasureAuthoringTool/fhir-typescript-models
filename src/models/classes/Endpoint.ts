/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  Coding,
  ContactPoint,
  DomainResource,
  EndpointStatus,
  Extension,
  Identifier,
  IEndpoint,
  MimeType,
  Period,
  PrimitiveString,
  PrimitiveUrl,
  Reference,
} from "../internal";

export class Endpoint extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Endpoint";

  public identifier?: Array<Identifier>;

  public status?: EndpointStatus;

  public connectionType?: Coding;

  public name?: PrimitiveString;

  public managingOrganization?: Reference;

  public contact?: Array<ContactPoint>;

  public period?: Period;

  public payloadType?: Array<CodeableConcept>;

  public payloadMimeType?: Array<MimeType>;

  public address?: PrimitiveUrl;

  public header?: Array<PrimitiveString>;

  public static parse(
    json: IEndpoint,
    providedInstance: Endpoint = new Endpoint()
  ): Endpoint {
    const newInstance: Endpoint = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = EndpointStatus.parsePrimitive(json.status, json._status);
    }
    if (json.connectionType) {
      newInstance.connectionType = Coding.parse(json.connectionType);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.managingOrganization) {
      newInstance.managingOrganization = Reference.parse(json.managingOrganization);
    }
    if (json.contact) {
      newInstance.contact = json.contact.map((x) => ContactPoint.parse(x));
    }
    if (json.period) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.payloadType) {
      newInstance.payloadType = json.payloadType.map((x) => CodeableConcept.parse(x));
    }
    if (json.payloadMimeType) {
      newInstance.payloadMimeType = json.payloadMimeType.map((x, i) => {
        const ext = json._payloadMimeType && json._payloadMimeType[i];
        return MimeType.parsePrimitive(x, ext);
      });
    }
    if (json.address) {
      newInstance.address = PrimitiveUrl.parsePrimitive(json.address, json._address);
    }
    if (json.header) {
      newInstance.header = json.header.map((x, i) => {
        const ext = json._header && json._header[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    return newInstance;
  }

  public static isEndpoint(input?: unknown): input is Endpoint {
    const castInput = input as Endpoint;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Endpoint";
  }

  public toJSON(): IEndpoint {
    const result: IEndpoint = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.connectionType) {
      result.connectionType = this.connectionType.toJSON();
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.managingOrganization) {
      result.managingOrganization = this.managingOrganization.toJSON();
    }

    if (this.contact) {
      result.contact = this.contact.map((x) => x.toJSON());
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.payloadType) {
      result.payloadType = this.payloadType.map((x) => x.toJSON());
    }

    if (this.payloadMimeType) {
      result.payloadMimeType = this.payloadMimeType.filter(x => !!x).map(x => x.value) as typeof result.payloadMimeType;
      result._payloadMimeType = Extension.serializePrimitiveExtensionArray(this.payloadMimeType);
    }

    if (this.address) {
      result.address = this.address.value;
      result._address = Extension.serializePrimitiveExtension(this.address);
    }

    if (this.header) {
      result.header = this.header.filter(x => !!x).map(x => x.value) as typeof result.header;
      result._header = Extension.serializePrimitiveExtensionArray(this.header);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Endpoint";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */

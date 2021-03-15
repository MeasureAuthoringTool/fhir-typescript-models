/* eslint-disable import/prefer-default-export, import/no-cycle */
import { IDataElement } from "../index";
import { DomainResource, Resource } from "../../fhir/internal";

export class DataElement {
  public codeListId?: string;

  public valueSetTitle?: string;

  public description?: string;

  public fhir_resource?: DomainResource;

  public static parse(
    json: IDataElement,
    providedInstance: DataElement = new DataElement(),
  ): DataElement {
    const newInstance: DataElement = providedInstance;

    if (json.codeListId) {
      newInstance.codeListId = json.codeListId;
    }
    if (json.valueSetTitle) {
      newInstance.valueSetTitle = json.valueSetTitle;
    }
    if (json.description) {
      newInstance.description = json.description;
    }
    if (json.fhir_resource) {
      newInstance.fhir_resource = Resource.parse(json.fhir_resource);
    }
    return newInstance;
  }

  toJSON(): IDataElement {
    const result: IDataElement = {};

    if (this.codeListId) {
      result.codeListId = this.codeListId;
    }
    if (this.valueSetTitle) {
      result.valueSetTitle = this.valueSetTitle;
    }
    if (this.description) {
      result.description = this.description;
    }
    if (this.fhir_resource) {
      result.fhir_resource = this.fhir_resource.toJSON();
    }

    return result;
  }

  public clone(): DataElement {
    return DataElement.parse(this.toJSON());
  }
}

/* eslint-enable import/prefer-default-export, import/no-cycle */

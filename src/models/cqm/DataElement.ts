import {DomainResource} from "../classes/DomainResource";

export class CqmDataElement {

  public codeListId?: string;
  public valueSetTitle?: string;
  public description?: string;
  // tslint:disable-next-line:variable-name
  public fhir_resource?: DomainResource;

  public static parse(
    json: any,
    providedInstance: CqmDataElement = new CqmDataElement()
  ): CqmDataElement {
    // TODO
    const newInstance: CqmDataElement = providedInstance;
    return newInstance;
  }

  toJSON(): any {
    // TODO
    const result: any = {};
  }

}

/* eslint-disable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */
import { 
  IBiologicallyDerivedProductCategory,
  IBiologicallyDerivedProductCollection,
  IBiologicallyDerivedProductManipulation,
  IBiologicallyDerivedProductProcessing,
  IBiologicallyDerivedProductStatus,
  IBiologicallyDerivedProductStorage,
  ICodeableConcept,
  IDomainResource,
  IElement,
  IIdentifier,
  IPrimitiveInteger,
  IReference,
} from "../internal";

export interface IBiologicallyDerivedProduct extends IDomainResource {
  identifier?: Array<IIdentifier>;

  productCategory?: IBiologicallyDerivedProductCategory;
  _productCategory?: IElement;

  productCode?: ICodeableConcept;

  status?: IBiologicallyDerivedProductStatus;
  _status?: IElement;

  request?: Array<IReference>;

  quantity?: IPrimitiveInteger;
  _quantity?: IElement;

  parent?: Array<IReference>;

  collection?: IBiologicallyDerivedProductCollection;

  processing?: Array<IBiologicallyDerivedProductProcessing>;

  manipulation?: IBiologicallyDerivedProductManipulation;

  storage?: Array<IBiologicallyDerivedProductStorage>;

}
/* eslint-enable import/prefer-default-export, import/no-cycle, @typescript-eslint/naming-convention, @typescript-eslint/no-empty-interface */

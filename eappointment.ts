/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  name: string,
};

export type ModelCategoryConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateCategoryInput = {
  id: string,
  name?: string | null,
};

export type DeleteCategoryInput = {
  id?: string | null,
};

export type CreateCompanyInput = {
  id?: string | null,
  title: string,
  categoryID: string,
  image?: S3ObjectInput | null,
  name: string,
  city: string,
  address: string,
  isFavorited?: boolean | null,
  latitude: string,
  longitude: string,
  location: string,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelCompanyConditionInput = {
  title?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  city?: ModelStringInput | null,
  address?: ModelStringInput | null,
  isFavorited?: ModelBooleanInput | null,
  latitude?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateCompanyInput = {
  id: string,
  title?: string | null,
  categoryID?: string | null,
  image?: S3ObjectInput | null,
  name?: string | null,
  city?: string | null,
  address?: string | null,
  isFavorited?: boolean | null,
  latitude?: string | null,
  longitude?: string | null,
  location?: string | null,
};

export type DeleteCompanyInput = {
  id?: string | null,
};

export type CreateServiceInput = {
  id?: string | null,
  comapanyID: string,
  name: string,
  pivot?: PivotInput | null,
};

export type PivotInput = {
  id: string,
  price: number,
};

export type ModelServiceConditionInput = {
  comapanyID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelServiceConditionInput | null > | null,
  or?: Array< ModelServiceConditionInput | null > | null,
  not?: ModelServiceConditionInput | null,
};

export type UpdateServiceInput = {
  id: string,
  comapanyID?: string | null,
  name?: string | null,
  pivot?: PivotInput | null,
};

export type DeleteServiceInput = {
  id?: string | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  categoryID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  city?: ModelStringInput | null,
  address?: ModelStringInput | null,
  isFavorited?: ModelBooleanInput | null,
  latitude?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  location?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelServiceFilterInput = {
  id?: ModelIDInput | null,
  comapanyID?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelServiceFilterInput | null > | null,
  or?: Array< ModelServiceFilterInput | null > | null,
  not?: ModelServiceFilterInput | null,
};

export type CreateCategoryMutationVariables = {
  input: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    companies:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        id: string,
        title: string,
        categoryID: string,
        name: string,
        city: string,
        address: string,
        isFavorited: boolean | null,
        latitude: string,
        longitude: string,
        location: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    companies:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        id: string,
        title: string,
        categoryID: string,
        name: string,
        city: string,
        address: string,
        isFavorited: boolean | null,
        latitude: string,
        longitude: string,
        location: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    companies:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        id: string,
        title: string,
        categoryID: string,
        name: string,
        city: string,
        address: string,
        isFavorited: boolean | null,
        latitude: string,
        longitude: string,
        location: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany:  {
    __typename: "Company",
    id: string,
    title: string,
    categoryID: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      companies:  {
        __typename: "ModelCompanyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        comapanyID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    name: string,
    city: string,
    address: string,
    isFavorited: boolean | null,
    latitude: string,
    longitude: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany:  {
    __typename: "Company",
    id: string,
    title: string,
    categoryID: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      companies:  {
        __typename: "ModelCompanyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        comapanyID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    name: string,
    city: string,
    address: string,
    isFavorited: boolean | null,
    latitude: string,
    longitude: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany:  {
    __typename: "Company",
    id: string,
    title: string,
    categoryID: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      companies:  {
        __typename: "ModelCompanyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        comapanyID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    name: string,
    city: string,
    address: string,
    isFavorited: boolean | null,
    latitude: string,
    longitude: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateServiceMutationVariables = {
  input: CreateServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type CreateServiceMutation = {
  createService:  {
    __typename: "Service",
    id: string,
    comapanyID: string,
    company:  {
      __typename: "Company",
      id: string,
      title: string,
      categoryID: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      name: string,
      city: string,
      address: string,
      isFavorited: boolean | null,
      latitude: string,
      longitude: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    pivot:  {
      __typename: "Pivot",
      id: string,
      price: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateServiceMutationVariables = {
  input: UpdateServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type UpdateServiceMutation = {
  updateService:  {
    __typename: "Service",
    id: string,
    comapanyID: string,
    company:  {
      __typename: "Company",
      id: string,
      title: string,
      categoryID: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      name: string,
      city: string,
      address: string,
      isFavorited: boolean | null,
      latitude: string,
      longitude: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    pivot:  {
      __typename: "Pivot",
      id: string,
      price: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteServiceMutationVariables = {
  input: DeleteServiceInput,
  condition?: ModelServiceConditionInput | null,
};

export type DeleteServiceMutation = {
  deleteService:  {
    __typename: "Service",
    id: string,
    comapanyID: string,
    company:  {
      __typename: "Company",
      id: string,
      title: string,
      categoryID: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      name: string,
      city: string,
      address: string,
      isFavorited: boolean | null,
      latitude: string,
      longitude: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    pivot:  {
      __typename: "Pivot",
      id: string,
      price: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCategoryQueryVariables = {
  id: string,
};

export type GetCategoryQuery = {
  getCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    companies:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        id: string,
        title: string,
        categoryID: string,
        name: string,
        city: string,
        address: string,
        isFavorited: boolean | null,
        latitude: string,
        longitude: string,
        location: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys:  {
    __typename: "ModelCategoryConnection",
    items:  Array< {
      __typename: "Category",
      id: string,
      name: string,
      companies:  {
        __typename: "ModelCompanyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany:  {
    __typename: "Company",
    id: string,
    title: string,
    categoryID: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      companies:  {
        __typename: "ModelCompanyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        comapanyID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    name: string,
    city: string,
    address: string,
    isFavorited: boolean | null,
    latitude: string,
    longitude: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompanysQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanysQuery = {
  listCompanys:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      title: string,
      categoryID: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      name: string,
      city: string,
      address: string,
      isFavorited: boolean | null,
      latitude: string,
      longitude: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetServiceQueryVariables = {
  id: string,
};

export type GetServiceQuery = {
  getService:  {
    __typename: "Service",
    id: string,
    comapanyID: string,
    company:  {
      __typename: "Company",
      id: string,
      title: string,
      categoryID: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      name: string,
      city: string,
      address: string,
      isFavorited: boolean | null,
      latitude: string,
      longitude: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    pivot:  {
      __typename: "Pivot",
      id: string,
      price: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListServicesQueryVariables = {
  filter?: ModelServiceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListServicesQuery = {
  listServices:  {
    __typename: "ModelServiceConnection",
    items:  Array< {
      __typename: "Service",
      id: string,
      comapanyID: string,
      company:  {
        __typename: "Company",
        id: string,
        title: string,
        categoryID: string,
        name: string,
        city: string,
        address: string,
        isFavorited: boolean | null,
        latitude: string,
        longitude: string,
        location: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      name: string,
      pivot:  {
        __typename: "Pivot",
        id: string,
        price: number,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateCategorySubscription = {
  onCreateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    companies:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        id: string,
        title: string,
        categoryID: string,
        name: string,
        city: string,
        address: string,
        isFavorited: boolean | null,
        latitude: string,
        longitude: string,
        location: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    companies:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        id: string,
        title: string,
        categoryID: string,
        name: string,
        city: string,
        address: string,
        isFavorited: boolean | null,
        latitude: string,
        longitude: string,
        location: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory:  {
    __typename: "Category",
    id: string,
    name: string,
    companies:  {
      __typename: "ModelCompanyConnection",
      items:  Array< {
        __typename: "Company",
        id: string,
        title: string,
        categoryID: string,
        name: string,
        city: string,
        address: string,
        isFavorited: boolean | null,
        latitude: string,
        longitude: string,
        location: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCompanySubscription = {
  onCreateCompany:  {
    __typename: "Company",
    id: string,
    title: string,
    categoryID: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      companies:  {
        __typename: "ModelCompanyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        comapanyID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    name: string,
    city: string,
    address: string,
    isFavorited: boolean | null,
    latitude: string,
    longitude: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany:  {
    __typename: "Company",
    id: string,
    title: string,
    categoryID: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      companies:  {
        __typename: "ModelCompanyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        comapanyID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    name: string,
    city: string,
    address: string,
    isFavorited: boolean | null,
    latitude: string,
    longitude: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany:  {
    __typename: "Company",
    id: string,
    title: string,
    categoryID: string,
    category:  {
      __typename: "Category",
      id: string,
      name: string,
      companies:  {
        __typename: "ModelCompanyConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    services:  {
      __typename: "ModelServiceConnection",
      items:  Array< {
        __typename: "Service",
        id: string,
        comapanyID: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    image:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    name: string,
    city: string,
    address: string,
    isFavorited: boolean | null,
    latitude: string,
    longitude: string,
    location: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateServiceSubscription = {
  onCreateService:  {
    __typename: "Service",
    id: string,
    comapanyID: string,
    company:  {
      __typename: "Company",
      id: string,
      title: string,
      categoryID: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      name: string,
      city: string,
      address: string,
      isFavorited: boolean | null,
      latitude: string,
      longitude: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    pivot:  {
      __typename: "Pivot",
      id: string,
      price: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateServiceSubscription = {
  onUpdateService:  {
    __typename: "Service",
    id: string,
    comapanyID: string,
    company:  {
      __typename: "Company",
      id: string,
      title: string,
      categoryID: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      name: string,
      city: string,
      address: string,
      isFavorited: boolean | null,
      latitude: string,
      longitude: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    pivot:  {
      __typename: "Pivot",
      id: string,
      price: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteServiceSubscription = {
  onDeleteService:  {
    __typename: "Service",
    id: string,
    comapanyID: string,
    company:  {
      __typename: "Company",
      id: string,
      title: string,
      categoryID: string,
      category:  {
        __typename: "Category",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      services:  {
        __typename: "ModelServiceConnection",
        nextToken: string | null,
      } | null,
      image:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      name: string,
      city: string,
      address: string,
      isFavorited: boolean | null,
      latitude: string,
      longitude: string,
      location: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    name: string,
    pivot:  {
      __typename: "Pivot",
      id: string,
      price: number,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

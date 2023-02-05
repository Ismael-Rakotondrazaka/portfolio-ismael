const validateName = (name) => {
  const defaultErrorMessage = "The name is invalid. Please try again.";
  const maxLength = 100;

  if (typeof name !== "string") {
    throw createError({
      statusCode: 400,
      message: defaultErrorMessage,
    });
  }

  const trimmed = name.trim().replace(/\s+/g, "");

  if (trimmed.length === 0) {
    throw createError({
      statusCode: 400,
      message: defaultErrorMessage,
    });
  }

  if (trimmed.length > maxLength) {
    throw createError({
      statusCode: 400,
      message: `The name is too long (${maxLength} characters is the maximum allowed). Please try again.`,
    });
  }

  return trimmed;
};

export { validateName };

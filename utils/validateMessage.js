const validateMessage = (message) => {
  const defaultErrorMessage = "The message is invalid. Please try again.";
  const maxLength = 2000;

  if (typeof message !== "string")
    throw createError({
      statusCode: 400,
      message: defaultErrorMessage,
    });

  const trimmed = message.trim();

  if (trimmed.length === 0) {
    throw createError({
      statusCode: 400,
      message: defaultErrorMessage,
    });
  }

  if (trimmed.length > maxLength) {
    throw createError({
      statusCode: 400,
      message: `The message is too long (${maxLength} characters is the maximum allowed). Please try again.`,
    });
  }

  return trimmed;
};

export { validateMessage };
